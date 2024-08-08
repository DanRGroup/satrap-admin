import React from 'react';
import Update from '../Update';

import { Card, Stack, Slide, Divider, Checkbox, Typography, CardHeader, CardActionArea } from '@mui/material';
import { AvatarPopover, NewSpeedDial } from 'components';
import { FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';

export default function Model({ model, delay, direction, checked, handleSelect, refetch }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <Slide
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
              {isAuthenticated &&
                hasRequiredRole(
                  ['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'],
                  userInfo?.roles
                ) && (
                  <>
                    <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
                  </>
                )}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 4, maxWidth: 180 }}
              title={
                <Typography fontSize={14} variant="subtitle1" color={!model?.cost && 'error'}>
                  {model?.cost ? `مبلغ پرداخت : ${model?.cost}` : 'عدم دسترسی به اطلاعات'}
                  {model?.reported_in && ` شماره گزارش : ${model?.reported_in}`}
                </Typography>
              }
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {model?.workshop?.title} - {model?.employer?.firstname} {model?.employer?.lastname}
              //   </Typography>
              // }
            />
          </CardActionArea>
        </Card>
      </Slide>
      <Divider variant="middle" />
    </>
  );
}
