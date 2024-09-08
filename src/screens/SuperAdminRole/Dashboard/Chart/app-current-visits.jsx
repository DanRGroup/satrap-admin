import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme } from '@mui/material/styles';
import { IconButton, CircularProgress, Tooltip, Box } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

import graph from './ContractChart/graph';

import { fNumber } from 'helpers/formatNumber';

import { useLazyQuery } from '@apollo/client';

import Chart, { useChart } from './chart';
import { useSelector } from 'react-redux';

import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

export default function AppCurrentVisits({ title, refetch, loading, subheader, chart, ...other }) {
  const theme = useTheme();
  const {
    language: { dir },
  } = useSelector((state) => state.setting);

  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors,
    labels: series.map((i) => i.label),
    stroke: {
      colors: [theme.palette.background.paper],
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    ...options,
  });

  return (
    <Card
      sx={{ alignItems: 'center', p: 2, direction: dir, m: 1 }}
      // height={320}
      // sx={{ direction: dir }}
      {...other}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <CardHeader title={title} subheader={subheader} sx={{ flexGrow: 1 }} />
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
      <StyledChart dir="ltr" type="pie" series={chartSeries} options={chartOptions} width="100%" height={280} />
    </Card>
  );
}

AppCurrentVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
