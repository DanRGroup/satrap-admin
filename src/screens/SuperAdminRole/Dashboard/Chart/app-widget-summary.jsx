import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'helpers/formatNumber';
import { useSelector } from 'react-redux';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, icon, url, color = 'primary', sx, ...other }) {
  const {
    language: { dir },
  } = useSelector((state) => state.setting);
  return (
    <Card>
      <CardActionArea
        to={url}
        LinkComponent={Link}
        sx={{
          px: 2,
          py: 3,
          direction: dir,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          columnGap: 3,
          ...sx,
        }}
      >
        {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

        <Stack spacing={0.5}>
          <Typography variant="h4" color="text.primary">
            {fShortenNumber(total)}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            {title}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
