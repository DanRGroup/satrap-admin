import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useReactToPrint } from 'react-to-print';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import './print.css';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Content from './Content';
import { Avatar, CircularProgress, DialogActions, DialogTitle, Stack, Typography, Tooltip } from '@mui/material';

export default function ControlCenter({ model, title, refetch }) {
  const { id, driver } = model;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const printRef = useRef(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const promiseResolveRef = useRef(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getUserFullName = (model) => {
    if (model?.firstname && model?.lastname) {
      return `${model?.firstname} ${model?.lastname}`;
    }
    if (model?.firstname) {
      return `${model?.firstname}`;
    }
    if (model?.lastname) {
      return `${model?.lastname}`;
    } else {
      return undefined;
    }
  };

  useEffect(() => {
    if (isPrinting && promiseResolveRef.current) {
      promiseResolveRef.current();
    }
  }, [isPrinting]);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onBeforeGetContent: () => {
      return new Promise((resolve) => {
        promiseResolveRef.current = resolve;
        setIsPrinting(true);
      });
    },
    onAfterPrint: () => {
      promiseResolveRef.current = null;
      setIsPrinting(false);
    },
  });

  return (
    <>
      <Tooltip title={title}>
        <IconButton
          size="small"
          sx={{ bgcolor: 'warning.lighter', color: 'warning.dark' }}
          color="warning"
          onClick={handleOpen}
        >
          <HistoryRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog
        dir="rtl"
        fullScreen={fullScreen}
        fullWidth
        open={open}
        maxWidth="sm"
        PaperComponent={Box}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minHeight: '30%',
          },
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ p: 1 }} component="div">
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography textAlign="center" variant="subtitle1" color="text.secondary" fontSize={16}>
                گزارش وضعیت فعالیت
              </Typography>
              {/* <Typography textAlign="center" variant="subtitle1" color="text.secondary" fontSize={14}>
                {id}
              </Typography> */}
            </Stack>
            <Stack>
              <UserInfo customer={getUserFullName(driver)} />
            </Stack>
          </Stack>
        </DialogTitle>
        <DialogContent ref={printRef} sx={{ p: 1, direction: 'ltr' }}>
          <Box className="print-header">
            <Stack rowGap={2} borderRadius={2}>
              <p color="#000" variant="h3">
                گزارش وضعیت فعالیت
              </p>
              <Stack direction="row" justifyContent="space-between">
                <p color="#000" variant="h5">
                  شماره فعالیت
                </p>
                <p color="#000" variant="h2">
                  {id}
                </p>
              </Stack>
            </Stack>
          </Box>
          <Content id={id} />
        </DialogContent>
        <DialogActions>
          <IconButton
            sx={{ bgcolor: 'info.lighter', color: 'info.dark', alignSelf: 'flex-end' }}
            size="large"
            color="info"
            variant="contained"
            onClick={handlePrint}
          >
            {isPrinting ? <CircularProgress size={25} /> : <PrintRoundedIcon fontSize="small" />}
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

const UserInfo = ({ customer }) => (
  <Stack
    justifyContent="space-between"
    alignItems="center"
    direction="row"
    columnGap={0.5}
    height={48}
    width={160}
    bgcolor="warning.light"
    sx={{ borderRadius: 2, overflow: 'hidden', px: 1 }}
  >
    <Avatar sx={{ bgcolor: 'warning.lighter', color: 'warning.dark', width: 35, height: 35 }}>
      <AccountCircleRoundedIcon fontSize="small" color="inherit" />
    </Avatar>
    <Stack alignItems="center" flex={1}>
      <Typography textAlign="center" color="warning.dark" fontWeight="bold" fontSize={12} variant="subtitle1">
        راننده : {customer}
      </Typography>
      {/* <Typography fontWeight="bold" fontSize={16} variant="subtitle1">
        {customer?.cellphone}
      </Typography> */}
    </Stack>
  </Stack>
);
