import React, { useEffect, useState } from 'react';

import graph from './graph';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import AppWebsiteVisits from '../app-website-visits';

import { IconButton, CircularProgress, Tooltip, Card, Box, CardHeader, Typography } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { groupBy } from 'utils/formArray';

import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

export default function ServiceChart() {
  const { userToken } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const title = 'نمودار فعالیت حمل بار (کارکرد تن)';
  const {
    language: { dir },
  } = useSelector((state) => state.setting);

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
          operation_type_ids: '1',
          // status_ids: '2',
        },
      });
      if (!isEmptyObject(data) && !error) {
        const { records } = data[graph.list.name];
        records.map((item) => {
          item.created_at = item.created_at.split(' ')[0];
        });
        grouped = groupBy(records, 'created_at');
        const keys = Object.keys(grouped);
        const vals = Object.values(grouped).map((x) => x.length);
        setLabels(keys.reverse());
        setData(vals.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleData();
  }, [refresh]);

  return (
    <Grid xs={12} md={6} lg={6}>
      {labels.length > 0 ? (
        <AppWebsiteVisits
          loading={loading}
          refetch={refetch}
          unit="task"
          title={title}
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
      ) : (
        <Card sx={{ direction: dir }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <CardHeader
              title={title}
              // subheader={subheader}
              sx={{ flexGrow: 1 }} // Allow the header to grow and take available space
            />
            <Tooltip title={<FormattedMessage id="refresh" />}>
              <IconButton sx={{ bgcolor: 'action.selected', color: '#fff' }} size="medium" onClick={refetch}>
                {loading ? (
                  <CircularProgress color="primary" size={25} />
                ) : (
                  <RefreshRoundedIcon color="primary" fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ p: 3, pb: 1 }}>
            <Typography fontSize={14} variant="subtitle1">
              اطلاعاتی وجود ندارد
            </Typography>
          </Box>
        </Card>
      )}
    </Grid>
  );
}
