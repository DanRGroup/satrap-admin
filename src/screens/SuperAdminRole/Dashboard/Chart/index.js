// import React from 'react';
import React, { useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import ModelsCount from './ModelsCount';
import ServiceChart from './ServiceChart';
import TonnageChart from './TonnageChart';
import ContractChart from './ContractChart';

import AppWebsiteVisits from './app-website-visits';

import AppNewsUpdate from './app-news-update';
import AppCurrentVisits from './app-current-visits';
import AppCurrentSubject from './app-current-subject';
import AppConversionRates from './app-conversion-rates';

import graph from './graph';

import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';

// ----------------------------------------------------------------------

export default function AppView() {
  const { userToken } = useSelector((state) => state.auth);
  const [forecast, setForecast] = useState(0);
  const [total, settotal] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const title = 'نمودار فعالیت حمل بار (کارکرد تن)';
  const {
    language: { dir },
  } = useSelector((state) => state.setting);

  let grouped = {};

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

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <ModelsCount />
        <Grid md={12} lg={12}>
          <ContractChart />
        </Grid>
        <TonnageChart />
        <ServiceChart />
        {/* <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="نمودار انواع فعالیت"
            subheader="10 روز گذشته"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'حمل‌بار',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'خاکبرداری',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'سنگ‌‌برداری',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
