import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
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

  const [formUpdate, { loading }] = useMutation(graph.create.query, {
    context: {
      serviceName: graph.create.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onChange = ({ formData }) => {
    setFormData(formData);
  };

  const onSubmit = async () => {
    try {
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
          disabled={loading}
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
          <Button size="large" variant="contained" onClick={onSubmit}>
            <FormattedMessage id="create" />
          </Button>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
