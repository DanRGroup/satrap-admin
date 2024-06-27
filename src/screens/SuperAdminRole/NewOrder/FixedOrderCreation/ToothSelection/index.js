import ToothMap from './ToothMap';
import React, { useState } from 'react';
import { Stack, Box, Slide, Typography } from '@mui/material';

export default function ToothSelection({ formData, onChange }) {
  const [selected, setSelected] = useState([]);

  const onSelectTeeth = (data) => {
    const selectedIndex = selected.indexOf(data);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, data);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
    onChange({ formData: { teeth: newSelected }, next: false });
  };

  return (
    <Stack p={2} alignItems="center" rowGap={3}>
      <Slide in>
        <Typography variant="h4">لطفا دندان مورد نظر را انتخاب کنید</Typography>
      </Slide>
      <Box maxWidth={380}>
        <ToothMap selected={formData?.teeth} onSelect={onSelectTeeth} />
      </Box>
    </Stack>
  );
}
