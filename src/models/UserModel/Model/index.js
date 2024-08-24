import React from 'react';
import Roles from '../Roles';
import Media from '../Media';
import Update from '../Update';

import { formatUserRoles } from 'helpers';

import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { AvatarPopover, NewSpeedDial } from 'components';
import {
  Card,
  Stack,
  Fade,
  Divider,
  Checkbox,
  Typography,
  CardHeader,
  CardActionArea,
  Chip,
  alpha,
  useTheme,
} from '@mui/material';

export default function Model({ model, delay, checked, handleSelect, refetch, color }) {
  const {
    language: { dir, direction },
  } = useSelector((state) => state.setting);
  const isRtl = direction === 'rtl';
  const theme = useTheme();

  const role = Array.isArray(model?.roles) && model?.roles.length > 0 ? formatUserRoles(model.roles) : '';

  const userFullName = model?.firstname && model?.lastname ? `${model.firstname} ${model.lastname}` : 'بدون نام';
  const cellphone = model?.cellphone;

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
            <Media
              id={model.id}
              model="User"
              collection="avatar"
              title={`${model?.firstname} ${model?.lastname}`}
              subheader=""
            >
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
              {role && <Chip label={role} />}
              {cellphone && <Chip label={cellphone} />}
              <Roles refetch={refetch} roles={model?.all_roles} />
              <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={
                <Typography fontSize={14} variant="subtitle1">
                  {`${userFullName}`}
                </Typography>
              }
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {model?.cellphone}
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
