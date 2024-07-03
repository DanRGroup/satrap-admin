import React from 'react';
import NewContract from './NewContract';
import NewTask from './NewTask';
import NewTariff from './NewTariff';

import { Card, CardActionArea, CardHeader, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export default function NewOrder() {
  return (
    <Container maxWidth="xl">
      <Stack pt={3} rowGap={3} alignItems="center">
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
            <NewContract />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
            <NewTask />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
            <NewTariff />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
