import React, { useEffect, useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  DialogContent,
  Grid,
  Chip,
  Stack,
  TextField,
  MenuItem,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import moment from 'moment';
import jMoment from 'moment-jalaali';
import { styled, useTheme } from '@mui/material/styles';
import { blue, grey, red } from '@mui/material/colors';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';

import pholiday from 'pholiday';
import { digitsEnToFa, digitsFaToEn } from '@persian-tools/persian-tools';
import { FormattedMessage } from 'react-intl';

const weekDaysTitle = [
  {
    id: '01',
    label: 'شنبه',
  },
  {
    id: '02',
    label: 'یکشنبه',
  },
  {
    id: '03',
    label: 'دوشنبه',
  },
  {
    id: '04',
    label: 'سه شنبه',
  },
  {
    id: '05',
    label: 'چهارشنبه',
  },
  {
    id: '06',
    label: 'پنجشنبه',
  },
  {
    id: '07',
    label: 'جمعه',
  },
];

const months = [
  {
    id: '01',
    label: 'فروردین',
  },
  {
    id: '02',
    label: 'اردیبهشت',
  },
  {
    id: '03',
    label: 'خرداد',
  },
  {
    id: '04',
    label: 'تیر',
  },
  {
    id: '05',
    label: 'مرداد',
  },
  {
    id: '06',
    label: 'شهریور',
  },
  {
    id: '07',
    label: 'مهر',
  },
  {
    id: '08',
    label: 'آبان',
  },
  {
    id: '09',
    label: 'آذر',
  },
  {
    id: '10',
    label: 'دی',
  },
  {
    id: '11',
    label: 'بهمن',
  },
  {
    id: '12',
    label: 'اسفند',
  },
];

const years = [
  '1330',
  '1331',
  '1332',
  '1333',
  '1334',
  '1335',
  '1336',
  '1337',
  '1338',
  '1339',
  '1340',
  '1341',
  '1342',
  '1343',
  '1344',
  '1345',
  '1346',
  '1347',
  '1348',
  '1349',
  '1350',
  '1351',
  '1352',
  '1353',
  '1354',
  '1355',
  '1356',
  '1357',
  '1358',
  '1359',
  '1360',
  '1361',
  '1362',
  '1363',
  '1364',
  '1365',
  '1366',
  '1367',
  '1368',
  '1369',
  '1370',
  '1371',
  '1372',
  '1373',
  '1374',
  '1375',
  '1376',
  '1377',
  '1378',
  '1379',
  '1380',
  '1381',
  '1382',
  '1383',
  '1384',
  '1385',
  '1386',
  '1387',
  '1388',
  '1389',
  '1390',
  '1391',
  '1392',
  '1393',
  '1394',
  '1395',
  '1396',
  '1397',
  '1398',
  '1399',
  '1400',
  '1401',
  '1402',
  '1403',
  '1404',
  '1405',
  '1406',
  '1407',
  '1408',
  '1409',
  '1410',
];

// const years = Array.from({ length: 410}, (i) => i + 1000);

function findInArray(arr, position) {
  if (position < 0) return arr[arr.length + position];
  return arr[position % arr.length];
}

const StyledTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: 16,
  padding: 4,
  margin: 8,
  minHeight: 32,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  '&.Mui-selected': {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.customShadows.primary,
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

export default function PersianDateWidget(props) {
  const {
    id,
    required,
    schema,
    value,
    onChange,
    rawErrors,
    options,
    // date = new Date(),
    closeOnSelect = true,
  } = props;

  jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

  const date = value || digitsFaToEn(moment().format('YYYY-MM-DD'));

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(jMoment(date).format('jYYYY-jMM-jDD'));

  const [year, setYear] = useState(Number(jMoment(date).format('jYYYY')));
  const [month, setMonth] = useState(Number(jMoment(date).format('jMM')));
  const [today, setToday] = useState(Number(jMoment(date).format('jDD')));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToday = () => {
    setMonth(Number(jMoment().format('jMM')));
    setYear(Number(jMoment().format('jYYYY')));
    setToday(Number(jMoment().format('jDD')));
    setSelectedValue(jMoment().format('jYYYY-jMM-jDD'));
    closeOnSelect && handleClose();
  };

  const mon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const daysInMonth = jMoment.jDaysInMonth(year, Number(month - 1));
  const daysInPrevMonth = jMoment.jDaysInMonth(year, Number(month - 2));

  const firstDay =
    (moment(jMoment(`${year}-${findInArray(mon, month - 1)}-01`, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')).day() + 1) % 7;

  const extend = (daysInMonth + firstDay) % 7;

  const handleSelection = (day) => {
    setSelectedValue(jMoment(`${year}-${month}-${day - firstDay + 1}`, 'jYYYY/jMM/jDD').format('jYYYY-jMM-jDD'));
    onChange(jMoment(`${year}-${month}-${day - firstDay + 1}`, 'jYYYY/jMM/jDD').format('YYYY-MM-DD'));
    closeOnSelect && handleClose();
  };

  useEffect(() => {
    value && onChange(moment(value).format('YYYY-MM-DD'));
  }, [value]);

  return (
    <>
      <Stack
        height={56}
        p={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        border={`1px solid ${grey[300]}`}
        borderRadius={2}
      >
        <Typography color={grey[500]} variant="subtitle1">
          <FormattedMessage id={schema.title} />
        </Typography>
        <Button
          disabled={schema.disabled}
          endIcon={!value && <CalendarMonthRoundedIcon />}
          variant="outlined"
          onClick={handleClickOpen}
        >
          {value && (
            <Chip
              disabled={schema.disabled}
              size="small"
              label={jMoment(selectedValue, 'jYYYY-jMM-jDD').format('dd')}
            />
          )}
          <Typography variant="subtitle2" sx={{ mx: 1 }}>
            {value ? digitsEnToFa(selectedValue) : 'انتخاب'}
          </Typography>
        </Button>
      </Stack>
      <Dialog
        onClose={handleClose}
        open={open}
        // fullScreen={fullScreen}
      >
        <DialogTitle fontSize={24}>{digitsEnToFa(selectedValue)}</DialogTitle>
        <DialogContent dir="rtl" sx={{ p: { xs: 0.5, sm: 1, md: 2 } }}>
          <Stack rowGap={2}>
            <Stack direction="row" pt={1} columnGap={1}>
              <TextField
                id="outlined-select-year"
                select
                fullWidth
                label="Year"
                defaultValue={year}
                // helperText="Please Select Year"
                onChange={(e) => setYear(Number(e.target.value))}
              >
                {years.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-month"
                select
                fullWidth
                label="Month"
                defaultValue={month}
                // helperText="Please Select Month"
                onChange={(e) => setMonth(Number(e.target.value))}
              >
                {months.map((option) => (
                  <MenuItem key={option.id} value={Number(option.id)}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>

            {/* <Grid p={1} container wrap="wrap" spacing={1} columns={14}>
              {yearTitle.map((yt, i) => (
                <Grid key={i} item xs={2}>
                  <Button
                    variant={year === Number(yt) ? 'contained' : 'text'}
                    size="small"
                    sx={{ width: '100%' }}
                    onClick={() => setYear(Number(yt))}
                  >
                    {yt}
                  </Button>
                </Grid>
              ))}
            </Grid> */}
            {/* <Box sx={{ bgcolor: 'background.paper', borderRadius: 2 }}>
              <StyledTabs
                value={month}
                onChange={(event, newValue) => setMonth(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{ alignItems: 'center' }}
                TabIndicatorProps={{ style: { display: 'none' } }}
              >
                {months.map((mo) => (
                  <StyledTab disableRipple key={mo.id} value={Number(mo.id)} label={mo.label} />
                ))}
              </StyledTabs>
            </Box> */}
            <Grid p={1} container spacing={1} columns={14}>
              {weekDaysTitle.map((item) => (
                <Grid key={item.id} item xs={2}>
                  <Chip label={item.label} variant="filled" sx={{ width: '100%' }} />
                </Grid>
              ))}
              {[...Array(firstDay + daysInMonth + (7 - extend) || 0)].map((item, i) =>
                i < firstDay || i >= daysInMonth + firstDay ? (
                  <Grid key={i} item xs={2}>
                    <Card sx={{ bgcolor: (i + 1) % 7 ? blue[100] : red[50], opacity: 0.2 }}>
                      <CardActionArea disabled>
                        {/* year diff */}
                        {/* <CardContent>
                      <Typography variant="subtitle2" align="center">
                        {
                        i < firstDay
                        ? jMoment(`${year}-${findInArray(mon,month-1)}-${daysInPrevMonth - (firstDay - i - 1)}`, 'jYYYY/jMM/jDD').format('jMM-jDD')
                        : jMoment(`${year}-${findInArray(mon,month+1)}-${i - daysInMonth - firstDay + 1}`, 'jYYYY/jMM/jDD').format('jDD')
                        }
                      </Typography>
                    </CardContent> */}
                      </CardActionArea>
                    </Card>
                  </Grid>
                ) : (
                  <Grid key={i} item xs={2}>
                    <Card
                      sx={{
                        border:
                          selectedValue ===
                            jMoment(`${year}-${month}-${i - firstDay + 1}`, 'jYYYY/jMM/jDD').format('jYYYY-jMM-jDD') &&
                          `1px solid ${blue[400]}`,
                        bgcolor:
                          jMoment(`${year}-${month}-${i - firstDay + 1}`, 'jYYYY/jMM/jDD').format('jYYYY-jMM-jDD') ===
                          jMoment().format('jYYYY-jMM-jDD')
                            ? blue[100]
                            : (i + 1) % 7
                            ? 'background.paper'
                            : red[50],
                      }}
                    >
                      <CardActionArea onClick={() => handleSelection(i)}>
                        <CardContent sx={{ px: { xs: 0, sm: 1, md: 2 }, py: { xs: 0, sm: 2, md: 2 } }}>
                          <Typography
                            color={
                              pholiday(`${year}-${month}-${i - firstDay + 1}`, 'jYYYY-jMM-jDD')
                                .events()
                                .find((selectedDay) => selectedDay.isHoliday) && red[400]
                            }
                            variant="subtitle1"
                            align="center"
                          >
                            {digitsEnToFa(
                              jMoment(`${year}-${month}-${i - firstDay + 1}`, 'jYYYY/jMM/jDD').format('jDD')
                            )}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
            {pholiday(selectedValue, 'jYYYY-jMM-jDD')
              .events()
              .map((selectedDay, i) => (
                <Typography key={i} color={selectedDay.isHoliday && red[400]}>
                  {selectedDay.event}
                </Typography>
              ))}
            <Stack direction="row-reverse" columnGap={2}>
              <Button size="large" variant="contained" color="info" onClick={handleClose}>
                بستن
              </Button>
              {jMoment(selectedValue, 'jYYYY-jMM-jDD').format('jYYYY-jMM-jDD') !==
                jMoment().format('jYYYY-jMM-jDD') && (
                <Button endIcon={<TodayRoundedIcon />} size="large" variant="outlined" color="info" onClick={goToday}>
                  برو به امروز
                </Button>
              )}
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
