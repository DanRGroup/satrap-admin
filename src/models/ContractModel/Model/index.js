import React from 'react';
import Update from '../Update';
import ContractFinancial from 'models/ContractFinancialModel';
import Media from '../Media';

import { alpha, useTheme } from '@mui/material';
import {
  Card,
  Stack,
  Slide,
  Divider,
  Checkbox,
  Typography,
  CardHeader,
  CardActionArea,
  Button,
  Tooltip,
  IconButton,
  Chip,
} from '@mui/material';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import { AvatarPopover, NewSpeedDial } from 'components';
import { FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';

export default function Model({ model, delay, direction, checked, handleSelect, refetch, color }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const workshopTitle = model?.workshop?.title;
  const employer = model?.employer?.firstname
    ? `${model?.employer?.firstname} ${model?.employer?.lastname}`
    : 'بدون نام';

  const theme = useTheme();

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
            <Media id={model.id} model="Contract" collection="avatar" title={model.title}>
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
              {workshopTitle && <Chip label={workshopTitle} />}
              <Chip label={employer} />
              {isAuthenticated &&
                hasRequiredRole(
                  ['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'],
                  userInfo?.roles
                ) && (
                  <>
                    <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
                    <ContractFinancial isPopup ids={model.id} title={<FormattedMessage id="financials" />}>
                      <Tooltip>
                        <IconButton sx={{ bgcolor: 'warning.lighter' }} size="small" color="warning">
                          <PaymentRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </ContractFinancial>
                  </>
                )}
              {/* <Media id={model.id} model="Contract" collection="banner" /> */}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={
                <Typography fontSize={14} variant="subtitle1">
                  {model?.title}
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
