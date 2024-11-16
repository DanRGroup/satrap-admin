import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

import { hasRequiredRole } from 'helpers';
import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useLazyQuery, useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';
import { FormattedMessage } from 'react-intl';
import { CircularProgress, Stack } from '@mui/material';
import { descriptionId } from '@rjsf/utils';

import SupervisorUpdate from '../SupervisorUpdate';
import SiteManagerUpdate from '../SiteManagerUpdate';

export default function CompHandler(props) {
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated && hasRequiredRole(['superadmin', 'workshopManager'], userInfo?.roles)) {
    return <UpdatePopup {...props} />;
  }
  if (isAuthenticated && hasRequiredRole(['workshopSupervisor'], userInfo?.roles)) {
    return <SupervisorUpdate {...props} />;
  }
  if (isAuthenticated && hasRequiredRole(['siteManager'], userInfo?.roles)) {
    return <SiteManagerUpdate {...props} />;
  }
  return null;
}

function UpdatePopup({ ids, title, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState();
  const { userToken } = useSelector((state) => state.auth);
  const [fetchModel, { loading }] = useLazyQuery(graph.get.query);
  const [updateModel, { loading: updating }] = useMutation(graph.update.query);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const getModel = async () => {
    try {
      // setFormData({ ...formData, end_time: '' });
      const { data } = await fetchModel({
        context: {
          serviceName: graph.get.serviceName,
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        },
        variables: {
          ids,
          for_admin: 1,
        },
      });
      if (!isEmptyObject(data)) {
        const res = data[graph.get.name].records.data[0];
        if (res) {
          setFormData({
            ...res,
            driver_id: res?.driver?.id,
            vehicle_id: res?.vehicle?.id,
            type_id: res?.type?.id,
            operation_type_id: res?.operation_type?.id,
            workshop_id: res?.workshop?.id,
            site_id: res?.site?.id,
            shift_type_id: res?.shift_type?.id,
            material_type_id: res?.material_type?.id,
            status_id: res?.status?.id,
            start_time: res?.start_time?.split(' ')[1],
            end_time: res?.end_time?.split(' ')[1],
            start_date: res?.start_time?.split(' ')[0],
            end_date: res?.end_time?.split(' ')[0],
          });
        }
      }
    } catch (error) {}
  };

  const onChange = ({ formData }) => {
    setFormData(formData);
  };

  const onSubmit = async () => {
    if (!formData?.end_time) {
      toast.error('فیلد زمان پایان الزامی است!');
    } else {
      try {
        const { data, errors } = await updateModel({
          context: {
            serviceName: graph.update.serviceName,
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          },
          variables: {
            ids,
            workshop_id: formData?.workshop_id,
            site_id: formData?.site_id,
            status_id: formData?.status_id,
            start_time: `${formData?.start_date} ${formData?.start_time}`,
            end_time: formData?.end_time ? `${formData?.end_date} ${formData?.end_time}` : null,
            bill_number: formData?.bill_number,
            tonnage: formData?.tonnage,
            description: formData?.description,
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
    }
  };

  useEffect(() => {
    open && getModel();
  }, [open]);

  return (
    <>
      <Tooltip title={title}>
        <IconButton sx={{ bgcolor: 'info.lighter' }} size="small" color="info" onClick={onOpen}>
          <ModeEditRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <NewDialog label="update" open={open} onClose={onClose} maxWidth="md">
        <NewDialogTitle title={<FormattedMessage id="edit_task" />} onClose={onClose} />
        <NewDialogContent>
          {loading || !formData ? (
            <Stack rowGap={3} py={2} alignItems="center" justifyContent="center" height={140}>
              <CircularProgress />
            </Stack>
          ) : (
            <Stack p={2} alignItems="center">
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
            disabled={loading || updating}
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
