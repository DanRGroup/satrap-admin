import React from 'react';
import Update from '../Update';
import Media from '../Media';
import Delete from '../Delete';

import { alpha, CardContent, CardMedia, useTheme } from '@mui/material';
import {
  Grid,
  Card,
  Paper,
  Box,
  Stack,
  Fade,
  Divider,
  Checkbox,
  Typography,
  CardHeader,
  CardActionArea,
  CardActions,
  Button,
} from '@mui/material';

import { AvatarPopover, NewSpeedDial } from 'components';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

export default function Model({ model, delay, direction, checked, handleSelect, refetch, color, isPopup }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';
  const theme = useTheme();

  return (
    <>
      <Fade in unmountOnExit timeout={{ appear: delay * 150, enter: delay * 170, exit: delay * 190 }}>
        {/* <Box
          sx={{ display: 'flex', flexWrap: 'rap', '& > :not(style)': { m: 1, width: 150, height: 150 } }}
          padding={2}
        >
          <Paper elevation={3}>
            <Stack
              left={8}
              zIndex={1}
              columnGap={0.5}
              height="100%"
              alignItems="center"
              // position="absolute"
              marginTop={0}
              justifyContent="center"
              // direction={isRtl ? 'row' : 'row-reverse'}
            >
              <Media id={model?.id} model="Workshop" collection="avatar" title={model?.title}>
                <AvatarPopover media={model?.media[0]?.full_url} />
              </Media>
            </Stack>
            <Typography>{model?.title}</Typography>
          </Paper>
        </Box> */}
        <Grid item>
          <Card direction="column" sx={{ p: 2, width: 200, height: 250 }}>
            <CardMedia>
              <Media id={model?.id} model="Workshop" collection="avatar" title={model?.title}>
                <AvatarPopover media={model?.media[0]?.full_url} />
              </Media>
            </CardMedia>
            <CardContent>
              <Typography>{model?.title}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              {!isPopup && <Delete ids={model?.id} refetch={refetch} />}
            </CardActions>
          </Card>
        </Grid>
      </Fade>
      {/* <Divider variant="middle" /> */}
    </>
  );
}
