import React, { useState } from 'react';
import {
  alpha,
  Card,
  Stack,
  Tooltip,
  Collapse,
  Checkbox,
  useTheme,
  useMediaQuery,
  CardHeader,
  Typography,
  IconButton,
  CardContent,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Form from './Form';
import { ExpandMoreButton } from 'components';
import { FormattedMessage } from 'react-intl';
import { digitsEnToFa } from '@persian-tools/persian-tools';
import { FilterAltOffRounded, KeyboardArrowUpRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import { TariffSelectionWidget } from 'components/FormWidgets';
import { TariffModel } from 'models';

export default function Filter({
  init,
  total,
  loading,
  refetch,
  isPopup,
  selection,
  acception,
  setFilter,
  clearFilter,
  clearSelection,
  handleSelectAllClick,
}) {
  const theme = useTheme();
  const [title, setTitle] = useState('');
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { defaultMatches: false });

  const {
    language: { direction },
  } = useSelector((state) => state.setting);

  const handleExpandClick = () => setExpanded(!expanded);

  const filterCount = digitsEnToFa(
    Object.values(init)
      .map((val) => {
        if (typeof val === 'object') {
          return Boolean(val.length);
        } else {
          return Boolean(val);
        }
      })
      .filter((val) => val).length
  );

  const onAssign = (data, onClose) => {
    const tariff = data[0];
    setTitle(tariff?.title);
    setFilter({
      site_ids: tariff?.site_id,
      workshop_ids: tariff?.workshop_id,
      material_type_ids: tariff?.material_type_id,
      shift_type_ids: tariff?.shift_type_id,
      operation_type_ids: tariff?.operation_type_id,
    });
    onClose();
  };

  const clearTariff = () => {
    setTitle('');
    setFilter({});
  };

  return (
    <>
      <Card
        elevation={1}
        sx={{
          direction: { direction },
          // bgcolor: selection ? alpha(theme.palette.warning.light, 1) : alpha(theme.palette.background.paper, 1),
        }}
      >
        <CardHeader
          title={
            <Typography variant="subtitle1" fontSize={16}>
              <FormattedMessage
                id={selection > 0 ? 'selected' : 'selectAll'}
                values={{ selected: digitsEnToFa(selection) }}
              />
            </Typography>
          }
          sx={{ p: 1 }}
          subheader={
            <Typography fontSize={12} variant="subtitle2">
              <FormattedMessage id="filtered" values={{ filtered: filterCount }} />
            </Typography>
          }
          avatar={
            <Checkbox
              size="small"
              color="warning"
              indeterminate={selection > 0 && selection < acception}
              checked={acception > 0 && selection === acception}
              onChange={handleSelectAllClick}
            />
          }
          action={
            <Stack columnGap={0.5} direction="row" alignItems="center" justifyContent="flex-end">
              <TariffModel isPopup isAssign onAssign={onAssign}>
                <Button variant="outlined">
                  <Typography variant="subtitle2" sx={{ mx: 1 }}>
                    انتخاب تعرفه
                  </Typography>
                  {!isMobile && <Typography variant="caption">{title || ''}</Typography>}
                </Button>
              </TariffModel>
              {title && (
                <Stack p={1} zIndex={2} alignItems="center" justifyContent="center">
                  <IconButton
                    color="error"
                    onClick={clearTariff}
                    sx={{ width: 24, height: 24, fontSize: 16, bgcolor: 'error.lighter' }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
              )}

              <Tooltip title={<FormattedMessage id="rmFilters" />}>
                <IconButton sx={{ bgcolor: 'info.lighter' }} size="small" color="info" onClick={clearFilter}>
                  <FilterAltOffRounded color="info" fontSize="small" />
                </IconButton>
              </Tooltip>
              <ExpandMoreButton
                open={<FormattedMessage id="showFilters" />}
                close={<FormattedMessage id="hideFilters" />}
                onClick={handleExpandClick}
                expand={expanded}
              >
                <KeyboardArrowUpRounded color="warning" fontSize="small" />
              </ExpandMoreButton>
            </Stack>
          }
        />
        <Collapse in={expanded} timeout="auto">
          <CardContent sx={{ py: 0, px: 1 }}>
            <Form init={init} setFilter={setFilter} />
            {/* <TariffSelectionWidget /> */}
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
