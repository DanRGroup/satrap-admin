import React, { useEffect, useState } from 'react';

import graph from './graph';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import AppWebsiteVisits from '../app-website-visits';

import { IconButton, CircularProgress, Tooltip } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { groupBy } from 'utils/formArray';

// ----------------------------------------------------------------------

export default function TonnageChart() {
  const { userToken } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [refresh, setRefresh] = useState(false);

  let grouped = {};

  const refetch = () => setRefresh((prev) => !prev);
  const [getData, { loading }] = useLazyQuery(graph.list.query, {
    context: {
      serviceName: graph.list.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleData = async () => {
    try {
      const { data, error } = await getData({
        variables: {
          operation_type_ids: '2',
          status_ids: '9',
        },
      });
      if (!isEmptyObject(data) && !error) {
        const { records } = data[graph.list.name];
        records.map((item) => {
          item.end_time = item.end_time.split(' ')[0];
        });
        grouped = groupBy(records, 'end_time');
        const keys = Object.keys(grouped);
        const accumulated = records.reduce((acc, record) => {
          const { end_time: end_time, tonnage: tonnage } = record;
          if (!acc[end_time]) {
            acc[end_time] = 0;
          }
          acc[end_time] += Number(tonnage);
          return acc;
        }, {});
        setLabels(keys);
        setData(Object.values(accumulated));
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleData();
    setData();
  }, [refresh]);

  return (
    <Grid xs={12} md={6} lg={6}>
      {labels.length > 0 && (
        <AppWebsiteVisits
          loading={loading}
          refetch={refetch}
          unit="tonnage"
          title="نمودار فعالیت حمل بار (کارکرد تن)"
          subheader="ده روز گذشته"
          chart={{
            labels: labels,
            series: [
              {
                name: 'تعداد',
                type: 'column',
                fill: 'solid',
                data: data,
              },
              //   {
              //     name: 'پیشرفت',
              //     type: 'area',
              //     fill: 'gradient',
              //     color: '#00b8d9',
              //     data: data,
              //   },
            ],
          }}
        />
      )}
    </Grid>
  );
}
