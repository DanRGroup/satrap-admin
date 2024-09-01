import React, { useEffect } from 'react';
import Update from '../Update';
import Media from '../Media';
import ChangeStatus from '../ChangeStatus';
import ChangeLocation from '../ChangeLocation';

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
import { AvatarPopover, NewSpeedDial } from 'components';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { hasRequiredRole } from 'helpers';

export default function Model({ model, delay, direction, checked, handleSelect, refetch, color }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const driver = model?.driver?.firstname + ' ' + model?.driver?.lastname;
  const taskType = model?.type.title;
  const plaque = model?.vehicle?.plaque;
  const workshopTitle = model?.workshop?.title;
  const siteTitle = model?.site?.title;

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
              {taskType && <Chip label={taskType} />}
              {plaque && <Chip label={plaque} />}
              {workshopTitle && <Chip label={workshopTitle} />}
              {siteTitle && <Chip label={siteTitle} />}
              <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
              <ChangeStatus ids={model.id} title={<FormattedMessage id="change_status" />} refetch={refetch} />
              <ChangeLocation
                ids={model?.vehicle?.id}
                title={<FormattedMessage id="changeLocation" />}
                refetch={refetch}
              />
              {/* <Media id={model.id} model="Task" collection="banner" /> */}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={
                <Typography fontSize={14} variant="subtitle1">
                  {driver}
                </Typography>
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
