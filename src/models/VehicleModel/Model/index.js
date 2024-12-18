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
  Chip,
  alpha,
  Box,
  Paper,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { AvatarPopover, NewSpeedDial, CardHeaderTitle } from 'components';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

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
    if (model?.driver?.lastname) {
      return `${model?.driver?.lastname}`;
    } else {
      return undefined;
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { defaultMatches: false });

  const chips = [
    { id: '1', name: 'vehicleType', title: model?.type?.title },
    { id: '2', name: 'driverName', title: getUserFullName(model) },
  ];

  const plaque = model?.plaque ? model?.plaque : '';

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
              model="Vehicle"
              collection="avatar"
              title={model.title}
              subheader={model.producer?.title || 'برند'}
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
              <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
              {/* <Media id={model.id} model="Brand" collection="banner" /> */}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <Box>
              <CardHeader
                sx={{ px: 0.5, pl: 13 }}
                title={
                  plaque ? ( // <Typography maxHeight="auto" fontSize={8}>
                    //     <IranLicensePlate serial={`IR13-${plaque.slice(2, 5)}A${plaque.slice(0, 2)}`} />
                    //   </Typography>
                    <Stack
                      alignItems={isMobile ? 'flex-start' : 'center'}
                      direction={isMobile ? 'column' : 'row'}
                      rowGap={1}
                    >
                      <Card
                        variant="outlined"
                        sx={{ width: 200, height: 42, bgcolor: 'warning.main', borderRadius: 1 }}
                      >
                        <CardContent sx={{ p: 0 }}>
                          <Stack width="100%" height="100%" direction="row">
                            <Stack flex={3} alignItems="center" justifyContent="center" columnGap={3}>
                              <Typography variant="subtitle2">ایران</Typography>
                              <Typography variant="subtitle2">13</Typography>
                            </Stack>
                            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'black' }} />
                            <Stack direction="row" flex={10} alignItems="center" justifyContent="center" columnGap={1}>
                              <Typography fontSize={22} fontWeight="bold">
                                {plaque.slice(2, 6)}
                              </Typography>
                              <Typography fontSize={22} fontWeight="bold">
                                ع
                              </Typography>
                              <Typography fontSize={22} fontWeight="bold">
                                {plaque.slice(0, 2)}
                              </Typography>
                            </Stack>
                            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'black' }} />
                            <Divider orientation="vertical" flexItem />
                            <Stack bgcolor="info.dark" flex={1} alignItems="center" justifyContent="center">
                              <Stack alignItems="center">
                                <Box component="img" src="/assets/icons/fa.webp" alt="IRAN" />
                                <Typography fontWeight="bold" fontSize={10}>
                                  IRAN
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </CardContent>
                      </Card>
                      <CardHeaderTitle chips={chips} />
                    </Stack>
                  ) : (
                    <CardHeaderTitle titleWidth={400} title={`شماره سریال : ${model?.serial_number}`} chips={chips} />
                  )
                }
                // subheader={
                //   <Typography fontSize={12} variant="subtitle2">
                //     {`شماره سریال : ${model.serial_number}`}
                //   </Typography>
                // }
              />
            </Box>
          </CardActionArea>
        </Card>
      </Fade>
      <Divider variant="middle" />
    </>
  );
}
