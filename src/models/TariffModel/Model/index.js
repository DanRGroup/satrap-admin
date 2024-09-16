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
  useTheme,
  useMediaQuery,
  Chip,
  alpha,
} from '@mui/material';
import { AvatarPopover, NewSpeedDial } from 'components';
import { FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';

export default function Model({ model, delay, direction, isAssign, checked, handleSelect, refetch, color }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const chips = [
    { id: '1', name: 'operationType', title: model?.operation_type?.title },
    { id: '2', name: 'materialType', title: model?.material_type?.title },
    { id: '3', name: 'shiftType', title: model?.shift_type?.title },
    { id: '4', name: 'taskType', title: model?.task_type?.title },
    { id: '5', name: 'workshop', title: model?.workshop?.title },
    { id: '6', name: 'site', title: model?.site?.title },
  ];

  const materialType = model?.material_type?.title;
  const taskType = model?.task_type?.title;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
              id={model?.id}
              model="Tariff"
              collection="avatar"
              title={model?.title}
              subheader={model?.producer?.title || 'برند'}
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
              {chips.map((chip) => {
                if (chip.title !== undefined) {
                  return <Chip sx={{ width: isAssign ? '80px' : '120px' }} key={chip.id} label={chip.title} />;
                } else {
                  return <Chip sx={{ width: isAssign ? '80px' : '120px' }} key={chip.id} label="----" />;
                }
              })}
              {isAuthenticated &&
                hasRequiredRole(
                  ['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'],
                  userInfo?.roles
                ) && <Update ids={model?.id} title={<FormattedMessage id="update" />} refetch={refetch} />}
              {/* <Media id={model?.id} model="Brand" collection="banner" /> */}
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={
                <Typography fontSize={14} variant="subtitle1">
                  {`${taskType} ${materialType && ' - ' + materialType}`}
                </Typography>
              }
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {`${model?.workshop?.title} ${
              //       model?.task_type.title === 'حمل بار' ? ` - ${model?.site?.title}` : ''
              //     }`}
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
