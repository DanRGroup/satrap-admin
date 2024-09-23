import React from 'react';
import Media from '../Media';
import Update from '../Update';
import Config from '../Config';
import Create from '../Create';

import { Card, Stack, Fade, Divider, Checkbox, Typography, CardHeader, CardActionArea } from '@mui/material';
import { AvatarPopover, NewSpeedDial } from 'components';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { hasRequiredRole } from 'helpers';

export default function Model({ model, delay, direction, checked, handleSelect, refetch }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const roles = ['superadmin', 'workshopAdmin', 'companyCeo'];
  const { userInfo } = useSelector((state) => state.auth);
  const hasRole = hasRequiredRole(roles, userInfo?.roles);
  return (
    <>
      <Fade
        in
        unmountOnExit
        direction={direction}
        timeout={{ appear: delay * 150, enter: delay * 170, exit: delay * 190 }}
      >
        <Card
          sx={{
            position: 'relative',
            bgcolor: checked && 'action.disabledBackground',
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
              model="ContractCategory"
              collection="avatar"
              title={model.title}
              subheader="ProductCategory"
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
              {hasRole && (
                <>
                  <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
                  <Create ids={model.id} title={<FormattedMessage id="create" />} refetch={refetch} />
                </>
                // ) : (
                //   <Config ids={model.id} title={<FormattedMessage id="config" />} refetch={refetch} />
              )}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={
                <Typography textAlign={isRtl ? 'start' : 'end'} fontSize={14} variant="subtitle1">
                  {model.title}
                </Typography>
              }
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {model.shop?.title}
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
