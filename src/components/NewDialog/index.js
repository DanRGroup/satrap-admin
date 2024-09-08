import React from 'react';
import { Box, Dialog, useMediaQuery, useTheme, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function NewDialog({ open, label, onClose, maxWidth = 'md', children }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullWidth
      dir="rtl"
      x
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      PaperComponent={Box}
      fullScreen={fullScreen}
      aria-labelledby={`${label}-dialog-title`}
      aria-describedby={`${label}-dialog-description`}
      PaperProps={{
        sx: {
          p: 2,
        },
      }}
    >
      {children}
    </Dialog>
  );
}
