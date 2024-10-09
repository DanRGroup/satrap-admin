import React, { useEffect } from 'react';
import Update from '../Update';
import Media from '../Media';
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
  useMediaQuery,
  useTheme,
  Chip,
  alpha,
} from '@mui/material';
import { AvatarPopover, CardHeaderTitle, NewSpeedDial } from 'components';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { hasRequiredRole } from 'helpers';

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
    { id: '1', name: 'taskType', title: model?.type.title },
    { id: '2', name: 'plaque', title: model?.vehicle?.plaque },
    { id: '3', name: 'workshop', title: model?.workshop?.title },
    { id: '4', name: 'site', title: model?.site?.title },
  ];

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
              <ChangeStatus ids={model?.id} title={<FormattedMessage id="change_status" />} refetch={refetch} />
              <HistoryCenter model={model} title={<FormattedMessage id="history" />} refetch={refetch} />
              <ChangeLocation
                ids={model?.vehicle?.id}
                title={<FormattedMessage id="set_location" />}
                refetch={refetch}
              />
              {/* <Media id={model.id} model="Task" collection="banner" /> */}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={<CardHeaderTitle title={getUserFullName(model) || '( بدون نام )'} chips={chips} />}
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
