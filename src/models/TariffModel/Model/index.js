import React from 'react';
import Update from '../Update';
import Media from '../Media';

import {
  Card,
  Stack,
  Slide,
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

export default function Model({ model, delay, direction, checked, handleSelect, refetch, color }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const operationType = model?.operation_type?.title;
  const materialType = model?.material_type?.title;
  const shiftType = model?.shift_type?.title;
  const taskType = model?.task_type?.title;
  const workshopTitle = model?.workshop?.title;
  const siteTitle = model?.site?.title;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            bgcolor: checked
              ? alpha(theme.palette.warning.lighter, 1)
              : color
              ? 'action.disabledOpacity'
              : 'action.focus',
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
            {/* {!isMobile && (
              <>
                {workshopTitle && <Chip label={workshopTitle} />}
                {siteTitle && <Chip label={siteTitle} />}
                {operationType && <Chip label={operationType} />}
                {shiftType && <Chip label={shiftType} />}
              </>
            )} */}
            <Checkbox size="small" checked={checked} onChange={handleSelect} />
            <Media
              id={model?.id}
              model="Brand"
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
              {workshopTitle && <Chip label={workshopTitle} />}
              {siteTitle && <Chip label={siteTitle} />}
              {operationType && <Chip label={operationType} />}
              {shiftType && <Chip label={shiftType} />}
              {isAuthenticated &&
                hasRequiredRole(
                  ['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'],
                  userInfo?.roles
                ) && <Update ids={model?.id} title={<FormattedMessage id="update" />} refetch={refetch} />}
              <Media id={model?.id} model="Brand" collection="banner" />
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
      </Slide>
      <Divider variant="middle" />
    </>
  );
}
