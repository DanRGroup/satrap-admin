import Form from './Form';
import graph from './graph';
import React, { useState } from 'react';
import { Box, Card, Stack, Button, CardHeader, Typography, CardActionArea } from '@mui/material';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { FormattedMessage } from 'react-intl';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';

export default function Confirm({ formData, setOrderId, handleNext, onChange }) {
  const [open, setOpen] = useState(false);
  const { userToken } = useSelector((state) => state.auth);
  const {
    language: { direction },
  } = useSelector((state) => state.setting);

  const [formUpdate, { loading }] = useMutation(graph.create.query, {
    context: {
      serviceName: graph.create.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onSubmit = async () => {
    // console.log('actions', Object.values(formData).map(x => Object.values(x)[0]?.title));
    try {
      const { patient, doctor, modified, description, demand_date } = formData;
      const { data, errors } = await formUpdate({
        variables: {
          description,
          demand_date,
          user_id: patient?.id,
          doctor_id: doctor?.id,
          technical_informations: JSON.stringify(modified),
        },
      });
      if (!errors) {
        if (!isEmptyObject(data)) {
          const res = data[graph.create.name];
          res?.messages.map((message) => toast.success(String(message)));
          onClose();
          handleNext();
          setOrderId(res?.model?.id);
        }
      }
    } catch (error) {}
  };

  return (
    <>
      <Button sx={{width: 160}} size='large' variant='contained' onClick={onOpen}>ثبت سفارش</Button>
      <NewDialog open={open} onClose={onClose} maxWidth="sm">
        <NewDialogTitle title={<Typography variant="subtitle1">ثبت سفارش</Typography>} onClose={onClose} />
        <NewDialogContent>
          <Box p={2}>
            <Form formData={formData} onChange={onChange} />
          </Box>
        </NewDialogContent>
        <NewDialogActions>
          <Stack width="100%">
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction={direction === 'rtl' ? 'row-reverse' : 'row'}
            >
              <Button
                sx={{ minWidth: 120 }}
                autoFocus
                size="large"
                variant="contained"
                disabled={loading}
                onClick={onSubmit}
              >
                <FormattedMessage id="ok" />
              </Button>
            </Stack>
          </Stack>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
