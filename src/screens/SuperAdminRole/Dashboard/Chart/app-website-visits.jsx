import PropTypes from 'prop-types';

import { IconButton, CircularProgress, Tooltip, Box, Card, CardHeader } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

import { FormattedMessage } from 'react-intl';

import Chart, { useChart } from './chart';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

export default function AppWebsiteVisits({ title, subheader, chart, refetch, loading, unit, ...other }) {
  const { labels, colors, series, options } = chart;
  const {
    language: { dir },
  } = useSelector((state) => state.setting);

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} ${unit === 'task' ? 'فعالیت' : 'تن'}`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card sx={{ direction: dir }} {...other}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <CardHeader
          title={title}
          subheader={subheader}
          sx={{ flexGrow: 1 }} // Allow the header to grow and take available space
        />
        <Tooltip title={<FormattedMessage id="refresh" />}>
          <IconButton sx={{ bgcolor: 'action.selected', color: '#fff' }} size="medium" onClick={refetch}>
            {loading ? (
              <CircularProgress color="primary" size={25} />
            ) : (
              <RefreshRoundedIcon color="primary" fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ p: 3, pb: 1 }}>
        <Chart dir="rtl" type="line" series={series} options={chartOptions} width="100%" height={364} />
      </Box>
    </Card>
  );
}

AppWebsiteVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
