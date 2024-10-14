import React from 'react';
import Update from '../Update';
import ContractFinancial from 'models/ContractFinancialModel';
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
  Button,
  Tooltip,
  IconButton,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import { AvatarPopover, NewSpeedDial, CardHeaderTitle } from 'components';
import { FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';
import { fCurrency } from 'helpers/formatNumber';

export default function Model({ model, delay, direction, checked, handleSelect, refetch, color }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const getEmployerName = (model) => {
    if (model?.company?.title) {
      return `${model?.company?.title}`;
    }
    if (model?.employer?.firstname && model?.employer?.lastname) {
      return `${model?.employer?.firstname} ${model?.employer?.lastname}`;
    }
    if (model?.employer?.firstname) {
      return `${model?.employer?.firstname}`;
    }
    if (model?.employer?.lastname) {
      return `${model?.employer?.lastname}`;
    } else {
      return undefined;
    }
  };

  const getTotal = (model) => {
    if (model?.operation_type?.id === '1') {
      return model?.total_service;
    }
    if (model?.operation_type?.id === '2') {
      return model?.total_tonnage;
    }
    if (model?.operation_type?.id === '5') {
      return model?.total_cubic_meter;
    } else {
      return undefined;
    }
  };

  const chips = [
    { id: '1', name: 'workshop', title: model?.workshop?.title },
    { id: '2', name: 'employer', title: getEmployerName(model) },
    { id: '3', name: 'category', title: model?.category?.title },
    { id: '4', name: 'number', title: model?.number },
    { id: '5', name: 'cost', title: `مبلغ : ${fCurrency(model?.cost)}` },
    { id: '6', name: 'operationType', title: `برآورد : ${fCurrency(model?.forecast_amount)}` },
    { id: '7', name: 'forecastAmount', title: `ثبت : ${getTotal(model)}` },
    { id: '8', name: 'totalService', title: `پیشرفت : ${model?.progress + ' %'}` },
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
                <CardHeaderTitle maxWidth="130px" title={model?.title} chips={chips} />
                // <Stack flexWrap={true}>

                // </Stack>
              }
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {model?.workshop?.title} - {model?.employer?.firstname} {model?.employer?.lastname}
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
