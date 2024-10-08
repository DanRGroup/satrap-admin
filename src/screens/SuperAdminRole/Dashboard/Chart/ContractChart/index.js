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
  const [title, setTtitle] = useState('');
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
        setcontracts(contracts);
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleData();
  }, [refresh]);

  //   console.log(contracts);
  return (
    <Grid container spacing={2}>
      {contracts.map((contract, index) => {
        const forecast = Number(contract.forecast_amount - contract.total_service);
        const total = Number(contract.total_service);

        return (
          <Grid item key={index}>
            <AppCurrentVisits
              refetch={refetch}
              loading={loading}
              title={contract.title} // Use contract title
              chart={{
                series: [
                  { label: 'انجام شده', value: total },
                  { label: 'مقدار باقیمانده', value: forecast },
                ],
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
