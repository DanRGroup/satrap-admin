import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation, useLazyQuery } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';
import { FormattedMessage } from 'react-intl';

import jMoment from 'moment-jalaali';

export default function CreatePopup({ title, refetch }) {
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
        refetch();
        onClose();
        setFormData({});
      }
    } catch (error) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Tooltip title={title}>
        <IconButton
          size="medium"
          color="warning"
          onClick={onClick}
          disabled={createLoading}
          sx={{ bgcolor: 'action.selected' }}
        >
          <AddCircleOutlineRounded fontSize="small" />
        </IconButton>
      </Tooltip>
      <NewDialog label="create" open={open} onClose={onClose} maxWidth="md">
        <NewDialogTitle title={<FormattedMessage id="create_task" />} onClose={onClose} />
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
