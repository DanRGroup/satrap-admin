import React, { useState } from 'react';
import { Dialog, Tooltip, IconButton, DialogTitle, Stack, CircularProgress, Box, Button } from '@mui/material';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';

import { NewDialogActions, NewDialogContent, NewDialog, NewDialogTitle } from 'components';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { FormattedMessage } from 'react-intl';

export default function RevokeRoleAssignment(props) {
  const { refetch, roleId, userId, workshopId, onClose } = props;
  const [formData, setformData] = useState({});
  const { userToken } = useSelector((state) => state.auth);

  const [formCreate, { loading }] = useMutation(graph.revokeUserRole.query, {
    context: {
      serviceName: graph.revokeUserRole.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onSubmit = async () => {
    // console.log('formdata', formData);
    try {
      const { data, errors } = await formCreate({
        variables: {
          user_id: userId,
          role_id: roleId,
          workshop_id: workshopId,
        },
      });
      if (!errors) {
        refetch();
        onClose();
        if (!isEmptyObject(data)) {
          data[graph.revokeUserRole.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {
      setformData(formData);
    }
  };

  return (
    <>
      <Tooltip title="حذف نقش">
        <IconButton sx={{ bgcolor: 'action.selected' }} size="medium" color="error" onClick={onSubmit}>
          {loading ? (
            <CircularProgress color="error" size={20} />
          ) : (
            <AssignmentLateIcon color="error" fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
      {/* <NewDialog
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
            <Form formData={formData} loading={loading} onChange={onChange} formSchema={schema} />
          </Stack>
        </NewDialogContent>
        <NewDialogActions>
          <Button size="large" variant="contained" onClick={onSubmit}>
            <FormattedMessage id="confirm" />
          </Button>
        </NewDialogActions>
      </NewDialog> */}
    </>
  );
}
