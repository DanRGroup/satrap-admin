import React, { useState, useRef, useEffect } from 'react';
import { Card, Stack, Divider, Typography, CardContent, InputBase, Box, TextField } from '@mui/material';

const LicensePlateFieldTemplate = (props) => {
  const { formData, onChange, disabled } = props;
  const [part1, setPart1] = useState(['', '']);
  const [part2, setPart2] = useState(['', '', '']);
  const [plaque, setPlaque] = useState('');
  const inputRefs1 = useRef([]);
  const inputRefs2 = useRef([]);
  // const [part1, setPart1] = useState(formData);

  useEffect(() => {
    if (typeof formData === 'string' && formData.length === 5) {
      setPart1([formData[0], formData[1]]);
      setPart2([formData[2], formData[3], formData[4]]);
    }
  }, [formData]);

  const handlePart1Change = (index, event) => {
    const value = event.target.value;
    console.log(index, value);
    if (value.length <= 1) {
      const newPart1 = [...part1];
      newPart1[index] = value;
      setPart1(newPart1);
      const newPlaque = newPart1.join('') + part2.join('');
      setPlaque(newPlaque);
      onChange(newPlaque);
      console.log('plaque', newPlaque);
      if (value.length === 1 && index < 1) {
        inputRefs1.current[index + 1].focus();
      }
    }
  };

  const handlePart2Change = (index, event) => {
    const value = event.target.value;
    console.log(index, value);
    if (value.length <= 1) {
      const newPart2 = [...part2];
      newPart2[index] = value;
      setPart2(newPart2);
      const newPlaque = part1.join('') + newPart2.join('');
      setPlaque(newPlaque);
      onChange(newPlaque);
      if (value.length === 1 && index < 2) {
        inputRefs2.current[index + 1].focus();
      }
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{ width: 300, height: 42, bgcolor: 'warning.main', alignSelf: 'center', borderRadius: 1, direction: 'ltr' }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack width="100%" height="100%" direction="row">
          <Stack flex={3} alignItems="center" justifyContent="center" columnGap={3}>
            <Typography variant="subtitle2">ایران</Typography>
            <Typography variant="subtitle2">13</Typography>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'black' }} />
          <Stack direction="row" flex={10} alignItems="center" justifyContent="center">
            {/* <TextField
              variant="standard"
              sx={{ fontWeight: 'bold', ml: 1, flex: 1 }}
              value={formData && formData.part2}
              type="text"
              // placeholder="---"
              onChange={(e) => {
                // setPart1(e.target.value);
                onChange({ ...formData, part2: e.target.value });
              }}
            />
            <Typography fontSize={18} fontWeight="bold">
              ع
            </Typography>
            <TextField
              variant="standard"
              sx={{ fontWeight: 'bold', ml: 1, flex: 1 }}
              value={formData && formData.part1}
              type="text"
              onChange={(e) => {
                // setPart1(e.target.value);
                onChange({ ...formData, part1: e.target.value });
              }}
              // placeholder="--"
            /> */}
            <Box dir="ltr">
              <Box display="flex" justifyContent="center">
                {part2.map((char, index) => (
                  <TextField
                    key={index}
                    value={char}
                    onChange={(e) => handlePart2Change(index, e)}
                    inputRef={(el) => (inputRefs2.current[index] = el)}
                    variant="filled"
                    size="small"
                    inputProps={{
                      style: {
                        width: '10px',
                        height: '10px',
                        textAlign: 'center',
                      },
                      maxLength: 1,
                    }}
                    sx={{ mr: 0.5 }}
                  />
                ))}
              </Box>
            </Box>
            <Typography fontSize={18} fontWeight="bold" sx={{ mr: 1, ml: 1 }}>
              ع
            </Typography>
            <Box dir="ltr">
              <Box display="flex" justifyContent="center">
                {part1.map((char, index) => (
                  <TextField
                    key={index}
                    value={char}
                    onChange={(e) => handlePart1Change(index, e)}
                    inputRef={(el) => (inputRefs1.current[index] = el)}
                    variant="filled"
                    size="small"
                    inputProps={{
                      style: {
                        width: '10px',
                        height: '10px',
                        textAlign: 'center',
                      },
                      maxLength: 1,
                    }}
                    sx={{ mr: 0.5 }}
                  />
                ))}
              </Box>
            </Box>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'black' }} />
          <Divider orientation="vertical" flexItem />
          <Stack bgcolor="info.dark" flex={1} alignItems="center" justifyContent="center">
            <Stack alignItems="center">
              <Box component="img" src="/assets/icons/fa.webp" alt="IRAN" />
              <Typography fontSize={10}>IRAN</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LicensePlateFieldTemplate;
