import React from 'react';
import Roles from '../Roles';
import Media from '../Media';
import Update from '../Update';

import { formatUserRoles } from 'helpers';

import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { AvatarPopover, NewSpeedDial, CardHeaderTitle } from 'components';
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

  const getUserRole = (model) => {
    return Array.isArray(model?.roles) && model?.roles.length > 0 ? formatUserRoles(model.roles) : undefined;
  };
  const getUserFullName = (model) => {
    if (model?.firstname && model?.lastname) {
      return `${model?.firstname} ${model?.lastname}`;
    }
    if (model?.firstname) {
      return `${model?.firstname}`;
    }
    if (model?.lastname) {
      return `${model?.lastname}`;
    } else {
      return undefined;
    }
  };
  const showUser = (model) => {
    const userName = getUserFullName(model);
    if (userName !== undefined) {
      return (
        <Typography fontSize={14} variant="subtitle1">
          {userName}
        </Typography>
      );
    }
    if (userName === undefined) {
      return (
        <Typography
          style={{
            fontStyle: 'italic',
          }}
          fontSize={14}
          variant="subtitle1"
        >
          ( بدون نام )
        </Typography>
      );
    }
  };

  const chips = [
    { id: '1', name: 'userRole', title: getUserRole(model) },
    { id: '2', name: 'cellphone', title: model?.cellphone },
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
              <Roles refetch={refetch} roles={model?.all_roles} userId={model?.id} />
              <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={<CardHeaderTitle title={showUser(model)} chips={chips} />}
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
