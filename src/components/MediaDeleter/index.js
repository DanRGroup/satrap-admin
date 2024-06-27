import React from 'react';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, CircularProgress } from '@mui/material';
import { DeleteOutlineRounded } from '@mui/icons-material';

import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';

export default function DeletePopup({ model, modelId, mediaId, refetch }) {
  const [open, setOpen] = React.useState(false);
  const { userToken } = useSelector((state) => state.auth);

  const onOpen = () => {
    return setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [handleDelete, { loading }] = useMutation(graph.unassign.query, {
    context: {
      serviceName: graph.unassign.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onDelete = async () => {
    const { data, errors } = await handleDelete({
      variables: { id: modelId, media_ids: mediaId, model_name: model },
    });
    if (!errors) {
      refetch();
      onClose();
      if (!isEmptyObject(data)) {
        data[graph.unassign.name]?.messages.map((message) => toast.success(String(message)));
      }
    }
  };

  return (
    <>
      <Button variant="outlined" color="error" size="small" onClick={onOpen}>
        {loading ? (
          <CircularProgress color="error" size={25} />
        ) : (
          <DeleteOutlineRounded color="error" fontSize="small" />
        )}
      </Button>
      <Dialog
        open={open}
        maxWidth="sm"
        onClose={onClose}
        sx={{ direction: 'ltr' }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">آیا از حذف این مورد مطمئن هستید؟</DialogTitle>
        <DialogContent sx={{ minWidth: { xs: 300, sm: 480 } }}></DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button color="inherit" onClick={onClose}>
            فعلا نه
          </Button>
          <Button
            color="error"
            variant="contained"
            disabled={loading}
            onClick={onDelete}
            sx={{ minWidth: 80 }}
            autoFocus
          >
            {loading ? <CircularProgress color="inherit" size={24} /> : 'بله'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
