import ToothMap from './ToothMap';
import React, { useEffect, useState } from 'react';
import { Stack, Box, Slide, Typography } from '@mui/material';

export default function ToothSelection({ modified = [], teeth = [], onChange }) {
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
    onChange && onChange({ formData: { teeth: newSelected }, next: false });
  };

  useEffect(() => {
    if (modified.length > 0) {
      setSelected([]);
      onChange && onChange({ formData: { teeth: undefined }, next: false });
    }
  }, [modified]);

  // const modified = ddd.map((x) => {
  //   const key = Object.keys(x)[0];
  //   return { [key]: Object.keys(x[key])[0] };
  // });

  return (
    <Box maxWidth={380}>
      <ToothMap modified={modified} selected={teeth} onSelect={onSelectTeeth} disabled={!onChange} />
    </Box>
  );
}
