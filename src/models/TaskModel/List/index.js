import React, { useState } from 'react';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

import { Stack, Tooltip, IconButton, CircularProgress, Box, Chip, useMediaQuery, useTheme } from '@mui/material';
import { LoadingMore, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';

import Model from '../Model';
import Filter from '../Filter';
import Delete from '../Delete';
import Create from '../Create';
import Assignment from '../Assignment';
import { FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';

export default function List({
  page,
  limit,
  total,
  report: { total_houre, total_service, total_shift, total_tonnage, total_cost, all_tonnage, total_cubic_meter },
  setPage,

  result,
  refetch,
  loading,

  title,
  isPopup,
  onClose,

  isAssign,
  onAssign,
  assigning,
  multiSelect,

  filter,
  setFilter,
  clearFilter,
  preSelected,
}) {
  const [selected, setSelected] = useState(preSelected || []);
  const [direction, setDirection] = useState('right');
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSelect = (item) => {
    const selectedIndex = selected.map((item) => item.id).indexOf(item.id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, item);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
    if (isAssign && !multiSelect && newSelected.length > 0) {
      onAssign(newSelected, onClose);
    }
  };

  const getColor = (index) => {
    return index % 2 === 0 ? false : true;
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(result);
      return;
    }
    setSelected([]);
  };

  const clearSelection = () => setSelected([]);

  const refresh = () => {
    clearSelection();
    refetch();
  };

  return (
    <>
      {isAssign && multiSelect && (
        <Assignment
          title={title}
          onClose={onClose}
          onAssign={onAssign}
          selected={selected}
          assigning={assigning}
          handleSelect={handleSelect}
        />
      )}
      <NewDialogTitle title={title} onClose={onClose} isPopup={isPopup}>
        <Filter
          total={total}
          init={filter}
          ids={selected}
          refetch={refetch}
          loading={loading}
          setFilter={setFilter}
          clearFilter={clearFilter}
          acception={result.length}
          selection={selected.length}
          clearSelection={clearSelection}
          handleSelectAllClick={handleSelectAllClick}
          isPopup={isPopup}
        />
      </NewDialogTitle>
      {isMobile && (
        <Box sx={{ textAlign: 'center' }}>
          {total_houre && <Chip label={`جمع ساعت : ${total_houre}`} />}
          {total_service && <Chip label={`جمع سرویس : ${total_service}`} />}
          {total_shift && <Chip label={`جمع شیفت : ${total_shift}`} />}
          {total_tonnage && <Chip label={`تناژ قرادادی : ${total_tonnage}`} />}
          {total_cost && <Chip label={`جمع هزینه‌ها : ${total_cost}`} />}
          {all_tonnage && <Chip label={`کل تناژ : ${all_tonnage}`} />}
          {total_cubic_meter && <Chip label={`جمع مترمکعب : ${total_cubic_meter}`} />}
        </Box>
      )}
      <NewDialogContent>
        <Stack p={0.5} rowGap={0.5} minHeight={isPopup ? 'calc(100vh - 245px)' : 'calc(100vh - 264px)'}>
          {result.map((model, i) => (
            <Model
              key={i}
              model={model}
              refetch={refetch}
              style={{ flex: 1 }}
              direction={direction}
              delay={(i % limit) + 1}
              color={getColor(i)}
              checked={selected.find((select) => model.id === select.id) ? true : false}
              handleSelect={() => handleSelect({ id: model?.id, title: model.title })}
            />
          ))}
          <LoadingMore total={total} result={result.length} loading={loading} onClick={() => setPage(page + 1)} />
        </Stack>
      </NewDialogContent>
      <NewDialogActions isPopup={isPopup}>
        {!isMobile && (
          <Box>
            {total_houre && <Chip label={`جمع ساعت : ${total_houre}`} />}
            {total_service && <Chip label={`جمع سرویس : ${total_service}`} />}
            {total_shift && <Chip label={`جمع شیفت : ${total_shift}`} />}
            {total_tonnage && <Chip label={`جمع تناژ : ${total_tonnage}`} />}
            {total_cost && <Chip label={`جمع هزینه‌ها : ${total_cost}`} />}
            {total_cubic_meter && <Chip label={`جمع مترمکعب : ${total_cubic_meter}`} />}
            {all_tonnage && <Chip sx={{ ml: 1 }} label={`کل تناژ : ${all_tonnage}`} />}
          </Box>
        )}

        <Tooltip title={<FormattedMessage id="refresh" />}>
          <IconButton sx={{ bgcolor: 'action.selected', color: '#fff' }} size="medium" onClick={refresh}>
            {loading ? (
              <CircularProgress color="primary" size={25} />
            ) : (
              <RefreshRoundedIcon color="primary" fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
        <Delete ids={selected.map((item) => item.id)} refetch={refresh} selection={selected.length > 0} />
        <Create title={<FormattedMessage id="create" />} refetch={refresh} />
      </NewDialogActions>
    </>
  );
}
