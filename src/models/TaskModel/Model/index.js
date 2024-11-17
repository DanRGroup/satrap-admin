import React, { useEffect, useState } from 'react';
import Update from '../Update';
import Media from '../Media';
import graph from './graph';
import ChangeStatus from '../ChangeStatus';
import ChangeLocation from '../ChangeLocation';
import HistoryCenter from '../HistoryCenter';

import {
  Card,
  Stack,
  Fade,
  Divider,
  Checkbox,
  Typography,
  CardHeader,
  CardActionArea,
  Button,
  Tooltip,
  useMediaQuery,
  useTheme,
  Chip,
  alpha,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { AvatarPopover, CardHeaderTitle, NewSpeedDial } from 'components';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { hasRequiredRole } from 'helpers';
import { TaskStatusModel } from 'models';
import { useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { toast } from 'react-toastify';

export default function Model({ model, delay, direction, checked, handleSelect, refetch, color }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';

  const getUserFullName = (model) => {
    if (model?.driver?.firstname && model?.driver?.lastname) {
      return `${model?.driver?.firstname} ${model?.driver?.lastname}`;
    }
    if (model?.driver?.firstname) {
      return `${model?.driver?.firstname}`;
    }
    if (model?.lastname) {
      return `${model?.driver?.lastname}`;
    } else {
      return undefined;
    }
  };

  const chips = [
    { id: '1', name: 'taskType', title: model?.type?.title },
    { id: '2', name: 'operationType', title: model?.operation_type?.title },
    { id: '3', name: 'materialType', title: model?.material_type?.title },
    { id: '4', name: 'vehicleType', title: model?.vehicle?.type?.title },
    { id: '5', name: 'plaque', title: model?.vehicle?.plaque },
    { id: '6', name: 'workshop', title: model?.workshop?.title },
    { id: '7', name: 'site', title: model?.site?.title },
  ];

  const status = model?.status?.id;
  const [selected, setSelected] = useState([model?.status]);

  const onAssign = (data, onClose) => {
    // const { id, title } = data[0];
    changeStatus(data[0]);
    // setSelected([{ id, title }]);
    // onChange(String(id));
    onClose();
  };

  const { userToken } = useSelector((state) => state.auth);

  const [handleDelete, { loading }] = useMutation(graph.delete.query, {
    context: {
      serviceName: graph.delete.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const changeStatus = async (status) => {
    try {
      const { data, errors } = await handleDelete({
        variables: { ids: model.id, status_id: status.id },
      });
      if (!errors) {
        refetch();
        if (!isEmptyObject(data)) {
          data[graph.delete.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <Fade in unmountOnExit timeout={{ appear: delay * 150, enter: delay * 170, exit: delay * 190 }}>
        <Card
          sx={{
            position: 'relative',
            // bgcolor: checked && 'action.disabledBackground',
            bgcolor: checked ? 'primary.light' : color ? 'action.disabledOpacity' : 'action.focus',
          }}
        >
          <Stack
            left={8}
            zIndex={1}
            columnGap={0.5}
            height="100%"
            alignItems="center"
            position="absolute"
            justifyContent="flex-start"
            direction={isRtl ? 'row' : 'row-reverse'}
          >
            <Checkbox size="small" checked={checked} onChange={handleSelect} />
            <Media id={model.id} model="Task" collection="avatar" title={model.title}>
              <AvatarPopover media={model?.media[0]?.full_url} />
            </Media>
          </Stack>
          <Stack
            right={8}
            zIndex={1}
            columnGap={0.5}
            height="100%"
            direction="row"
            alignItems="center"
            position="absolute"
            justifyContent="flex-end"
          >
            <NewSpeedDial>
              <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
              <HistoryCenter model={model} title={<FormattedMessage id="history" />} refetch={refetch} />
              <ChangeLocation
                ids={model?.vehicle?.id}
                title={<FormattedMessage id="set_location" />}
                refetch={refetch}
              />
              {/* <ChangeStatus
                ids={model?.id}
                title={<FormattedMessage id="change_status" />}
                refetch={refetch}
                status={model?.status?.id}
              /> */}
              <TaskStatusModel isAssign isPopup onAssign={onAssign} preSelected={selected}>
                <Tooltip title={<FormattedMessage id="change_status" />}>
                  {/* <IconButton sx={{ bgcolor: 'error.lighter' }} size="small" color="info" onClick={onOpen}>
          <AppRegistrationRoundedIcon color="error" fontSize="small" />
        </IconButton> */}
                  <Stack minWidth={148}>
                    <Button
                      size="small"
                      variant="outlined"
                      color={status === '2' ? 'success' : 'error'}
                      endIcon={status === '2' ? <CheckCircleIcon /> : <ErrorIcon />}
                      // onClick={onOpen}
                    >
                      {model?.status?.title}
                    </Button>
                  </Stack>
                </Tooltip>
              </TaskStatusModel>
              {/* <Media id={model.id} model="Task" collection="banner" /> */}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={
                <CardHeaderTitle
                  titleWidth={100}
                  chipWidth={120}
                  maxWidth="76%"
                  title={getUserFullName(model) || '( بدون نام )'}
                  chips={chips}
                />
              }
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {`${model?.workshop?.title} ${model?.type.title === 'حمل بار' ? ` - ${model?.site?.title}` : ''}`}
              //   </Typography>
              // }
            />
          </CardActionArea>
        </Card>
      </Fade>
      <Divider variant="middle" />
    </>
  );
}
