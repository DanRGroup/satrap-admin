import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import graph from './graph';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import { addCommas, digitsEnToFa } from '@persian-tools/persian-tools';
import { Box, Popover, Card, Stack, Avatar, CardHeader, Typography, IconButton } from '@mui/material';

import { CircularProgress } from '@mui/material';
import { CountdownTimer } from 'components';

export default function Content({ id }) {
  const [result, setResult] = useState([]);
  const { userToken } = useSelector((state) => state.auth);

  const [getData, { loading }] = useLazyQuery(graph.get.query, {
    variables: {
      ids: id,
      for_admin: 1,
    },
    context: {
      serviceName: graph.get.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const fetchData = async () => {
    try {
      const { data } = await getData();
      if (!isEmptyObject(data)) {
        const res = data[graph.get.name]?.records.data[0];
        setResult(res.status_timeline);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Stack justifyContent="center" alignItems="center" height="100%" rowGap={2}>
        <CircularProgress size={26} />
        <Typography variant="caption">در حال بارگذاری...</Typography>
      </Stack>
    );
  }

  return (
    <Stack justifyContent="space-between" height="100%" rowGap={1}>
      <Stack rowGap={1} pt={2}>
        {result.map((row, i) => {
          return (
            <Card key={i} elevation={1}>
              <CardHeader
                sx={{ p: 1 }}
                title={
                  <Typography fontSize={{ xs: 14 }} variant="subtitle1">
                    {row.status?.title}
                  </Typography>
                }
                avatar={
                  <Stack direction="row" justifyContent="center" alignItems="center" columnGap={0.5}>
                    <UserInfo customer={row.user} />
                  </Stack>
                }
                action={
                  <Stack
                    width={{ xs: 10 }}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    columnGap={1}
                    rowGap={1}
                  >
                    <OrderDate date={row.created_at} />
                  </Stack>
                }
              />
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
}

const UserInfo = ({ customer }) => (
  <Stack
    justifyContent="space-between"
    alignItems="center"
    direction="row"
    columnGap={0.5}
    height={48}
    width={160}
    bgcolor="#eee"
    sx={{ borderRadius: 2, overflow: 'hidden', px: 1 }}
  >
    <Avatar sx={{ bgcolor: 'error.main', color: '#fff', width: 35, height: 35 }}>
      <AccountCircleRoundedIcon fontSize="small" color="inherit" />
    </Avatar>
    <Stack alignItems="center" flex={1}>
      <Typography textAlign="center" color="error.dark" fontWeight="bold" fontSize={12} variant="subtitle1">
        {customer?.firstname || ''} {customer?.lastname || ''}
      </Typography>
      <Typography fontWeight="bold" fontSize={16} variant="subtitle1">
        {customer?.cellphone}
      </Typography>
    </Stack>
  </Stack>
);

const OrderDate = ({ title, date, color = 'warning.darker', bgcolor = 'warning.lighter' }) =>
  date && (
    <Stack direction="row" columnGap={1} alignItems="center">
      <Typography width={60} variant="subtitle1" fontSize={12}>
        {title}
      </Typography>
      <CountdownTimer targetDate={date} color={color} bgcolor={bgcolor} />
    </Stack>
  );
