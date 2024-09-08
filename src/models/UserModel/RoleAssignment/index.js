import React, { useState } from 'react';
import { Dialog, Tooltip, IconButton, DialogTitle, Stack, CircularProgress, Box, Button } from '@mui/material';
import { AssignmentIndRounded } from '@mui/icons-material';

import { NewDialogActions, NewDialogContent, NewDialog, NewDialogTitle } from 'components';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { FormattedMessage } from 'react-intl';

export default function RoleAssignment({ ids, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { userToken } = useSelector((state) => state.auth);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [formCreate, { loading }] = useMutation(graph.assignRole.query, {
    context: {
      serviceName: graph.assignRole.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onChange = ({ formData }) => {
    setFormData(formData);
  };

  const onSubmit = async () => {
    // console.log('formdata', formData);
    try {
      const { data, errors } = await formCreate({
        variables: {
          user_ids: ids.map((user) => user.id),
          ...formData,
        },
      });
      if (!errors) {
        refetch();
        onClose();
        setFormData({});
        if (!isEmptyObject(data)) {
          data[graph.assignRole.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Tooltip title="اختصاص نقش">
        <IconButton sx={{ bgcolor: 'action.selected' }} size="medium" color="error" onClick={onOpen}>
          {loading ? (
            <CircularProgress color="error" size={20} />
          ) : (
            <AssignmentIndRounded color="error" fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
      <NewDialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"
        fullWidth
        maxWidth="xs"
      >
        <NewDialogTitle title={<FormattedMessage id="role_asignment" />} onClose={onClose} />
        <NewDialogContent>
          <Stack sx={{ m: 2 }}>
            <Form formData={formData} loading={loading} onChange={onChange} />
          </Stack>
        </NewDialogContent>
        <NewDialogActions>
          <Button size="large" variant="contained" onClick={onSubmit}>
            <FormattedMessage id="confirm" />
          </Button>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
