import React, { useState } from 'react';
import { Dialog, Tooltip, IconButton, DialogTitle, DialogContent, CircularProgress } from '@mui/material';
import { AssignmentIndRounded } from '@mui/icons-material';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';

export default function RoleAssignment({ ids, refetch }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const { userToken } = useSelector((state) => state.auth);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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

  const onSubmit = async ({ formData }) => {
    try {
      const { data, errors } = await formCreate({
        variables: {
          user_ids: ids.map((user) => user.id),
          ...formData,
        },
      });
      if (!errors) {
        refetch();
        handleClose();
        if (!isEmptyObject(data)) {
          data[graph.assignRole.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {
      setForm(formData);
    }
  };

  return (
    <>
      <Tooltip title="اختصاص نقش">
        <IconButton sx={{ bgcolor: 'action.selected' }} size="medium" color="error" onClick={handleClickOpen}>
          {loading ? (
            <CircularProgress color="error" size={25} />
          ) : (
            <AssignmentIndRounded color="error" fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">اختصاص نقش</DialogTitle>
        <DialogContent>
          <Form formData={form} loading={loading} onSubmit={onSubmit} />
        </DialogContent>
      </Dialog>
    </>
  );
}
