import React from 'react';
import Update from '../Update';
import Media from '../Media';

import {
  Card,
  Stack,
  Fade,
  Divider,
  Checkbox,
  Typography,
  CardHeader,
  CardActionArea,
  alpha,
  useTheme,
  Chip,
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
  const theme = useTheme();

  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const chips = [
    { id: '1', name: 'manager', title: `${model?.manager?.firstname || '--'} ${model?.manager?.lastname || '--'}` },
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
            <Media id={model.id} model="Workshop" collection="avatar" title={model.title}>
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
              {isAuthenticated && hasRequiredRole(['superadmin', 'workshopManager', 'companyCeo'], userInfo?.roles) && (
                <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
              )}
              {/* <Media id={model.id} model="Workshop" collection="banner" /> */}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={<CardHeaderTitle title={model?.title} chips={chips} />}
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {model.producer?.title}
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
