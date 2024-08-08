// import React from 'react';
import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import AppCurrentVisits from '../app-current-visits';

import graph from './graph';

import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function AppView() {
  const { userToken } = useSelector((state) => state.auth);
  const [contracts, setcontracts] = useState([]);
  const [forecast, setForecast] = useState(0);
  const [total, settotal] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const title = 'نمودار فعالیت حمل بار (کارکرد تن)';
  const {
    language: { dir },
  } = useSelector((state) => state.setting);

  const refetch = () => setRefresh((prev) => !prev);
  const [getData, { loading }] = useLazyQuery(graph.contract.query, {
    context: {
      serviceName: graph.contract.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleData = async () => {
    try {
      const { data, error } = await getData({
        variables: {
          with_calculations: 1,
          // status_ids: '2',
        },
      });
      if (!isEmptyObject(data) && !error) {
        const { data: contracts } = data[graph.contract.name];
        const { forecast_amount, total_service } = contracts[0];
        setForecast(Number(forecast_amount - total_service));
        settotal(Number(total_service));
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleData();
  }, [refresh]);

  //   console.log(contracts);
  return (
    <Grid xs={12} md={6} lg={4}>
      <AppCurrentVisits
        title={`نمودار اجرای قرارداد`}
        chart={{
          series: [
            { label: 'انجام شده', value: total },
            { label: 'مقدار باقیمانده', value: forecast },
          ],
        }}
      />
    </Grid>
  );
}
