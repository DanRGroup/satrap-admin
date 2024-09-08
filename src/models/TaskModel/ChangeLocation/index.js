import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useLazyQuery, useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';
import { FormattedMessage } from 'react-intl';
import { CircularProgress, Stack } from '@mui/material';
import { hasRequiredRole } from 'helpers';

export default function CompHandler(props) {
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated && hasRequiredRole(['driver'], userInfo?.roles)) {
    return <UpdatePopup {...props} />;
  }
  return null;
}

function UpdatePopup({ ids, title, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState();
  const [formError, setFormError] = useState(true);
  const { userToken } = useSelector((state) => state.auth);
  const [fetchModel, { loading }] = useLazyQuery(graph.get.query);
  const [updateModel, { loading: updating }] = useMutation(graph.update.query);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const getModel = async () => {
    try {
      const { data } = await fetchModel({
        context: {
          serviceName: graph.get.serviceName,
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        },
        variables: {
          ids,
        },
      });
      if (!isEmptyObject(data)) {
        const res = data[graph.get.name].data[0];
        if (res) {
          const { tracks } = res;
          setFormData({
            location: {
              lat: tracks[0]?.lat,
              lng: tracks[0]?.lng,
            },
          });
        }
      }
    } catch (error) {}
  };

  const onChange = ({ formData, errors }) => {
    setFormData(formData);
    setFormError(Boolean(errors.length > 0));
  };

  const onSubmit = async () => {
    try {
      const { data, errors } = await updateModel({
        context: {
          serviceName: graph.update.serviceName,
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        },
        variables: {
          vehicle_id: ids,
          lat: formData?.location.lat,
          lng: formData?.location.lng,
        },
      });
      if (!errors) {
        refetch();
        onClose();
        setFormData({});
        if (!isEmptyObject(data)) {
          data[graph.update.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {
      setFormData(formData);
    }
  };

  useEffect(() => {
    open && getModel();
  }, [open]);

  return (
    <>
      <Tooltip title={title}>
        <IconButton sx={{ bgcolor: 'action.selected' }} size="small" color="info" onClick={onOpen}>
          <FmdGoodRoundedIcon color="primary" fontSize="small" />
        </IconButton>
      </Tooltip>
      <NewDialog label="update" open={open} onClose={onClose} maxWidth="sm">
        <NewDialogTitle title={title} onClose={onClose} />
        <NewDialogContent>
          {loading ? (
            <Stack rowGap={3} py={2} alignItems="center" justifyContent="center" height={140}>
              <CircularProgress />
            </Stack>
          ) : (
            <Stack p={2}>
              <Form formData={formData} onChange={onChange} />
            </Stack>
          )}
        </NewDialogContent>
        <NewDialogActions>
          <Button
            autoFocus
            size="large"
            color="primary"
            variant="contained"
            disabled={loading || updating || formError}
            onClick={onSubmit}
            sx={{ minWidth: 80 }}
          >
            <FormattedMessage id="update" />
          </Button>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
