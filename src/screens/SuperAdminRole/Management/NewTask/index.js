import graph from 'models/TaskModel/Create/graph';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Slide,
  Stack,
  Button,
  styled,
  CardMedia,
  CardHeader,
  Typography,
  CardActionArea,
} from '@mui/material';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation, useLazyQuery } from '@apollo/client';
import { FormattedMessage } from 'react-intl';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';

import Form from 'models/TaskModel/Create/Form';
import jMoment from 'moment-jalaali';

export default function FixedOrderCreation() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { userToken } = useSelector((state) => state.auth);

  const onClick = () => {
    setOpen(true);
    const newDate = new Date(Date.now());
    const formattedTime = jMoment(newDate).format('HH:mm:ss');
    const formattedDate = jMoment(newDate).format('YYYY-MM-DD');
    setFormData({ start_time: formattedTime, start_date: formattedDate });
  };
  const onClose = () => setOpen(false);

  const [formUpdate, { loading: createLoading }] = useMutation(graph.create.query, {
    context: {
      serviceName: graph.create.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const [getData, { loading: listLoading }] = useLazyQuery(graph.list.query, {
    context: {
      serviceName: graph.list.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleVehicle = async (vehicle_id) => {
    try {
      const { data, error } = await getData({
        variables: {
          ids: vehicle_id,
        },
      });
      if (!isEmptyObject(data) && !error) {
        const res = data[graph.list.name];
        const vehicle_type = res.data[0]?.type?.id;
        switch (vehicle_type) {
          case '1':
            setFormData({ ...formData, vehicle_id: vehicle_id, tonnage: '10', coefficient: '1' });
            break;
          case '2':
            setFormData({ ...formData, vehicle_id: vehicle_id, tonnage: '15', coefficient: '1.5' });
            break;
          default:
            setFormData({ ...formData, vehicle_id: vehicle_id, tonnage: null, coefficient: null });
            break;
        }
      }
    } catch (error) {}
  };

  const onChange = ({ formData }) => {
    setFormData(formData);
  };

  useEffect(() => {
    if (formData?.vehicle_id) {
      handleVehicle(formData.vehicle_id);
    }
  }, [formData.vehicle_id]);

  const onSubmit = async () => {
    try {
      console.log(formData);
      const { data, errors } = await formUpdate({
        variables: {
          tariff_id: formData?.tariff_id,
          vehicle_id: formData?.vehicle_id,
          start_time: `${formData?.start_date} ${formData?.start_time}`,
          bill_number: formData?.bill_number,
          tannage: formData?.tannage,
          description: formData?.description,
        },
      });
      if (!errors) {
        if (!isEmptyObject(data)) {
          data[graph.create.name]?.messages.map((message) => toast.success(String(message)));
        }
        onClose();
        setFormData({});
      }
    } catch (error) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardActionArea onClick={onClick}>
          <CardMedia alt="Task" image="/assets/works/task.jpg" sx={{ pt: '70%', m: 1, borderRadius: 2 }} />
          <CardHeader
            title="ایجاد فعالیت"
            subheader={
              <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                توضیحات فعالیت
              </Typography>
            }
          />
        </CardActionArea>
      </Card>
      <NewDialog label="create" open={open} onClose={onClose} maxWidth="md">
        <NewDialogTitle title="ایجاد فعالیت" onClose={onClose} />
        <NewDialogContent>
          <Stack p={2} alignItems="center">
            <Form formData={formData} onChange={onChange} />
          </Stack>
        </NewDialogContent>
        <NewDialogActions>
          <Button size="large" variant="contained" onClick={onSubmit} disabled={listLoading || createLoading}>
            <FormattedMessage id="create" />
          </Button>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
