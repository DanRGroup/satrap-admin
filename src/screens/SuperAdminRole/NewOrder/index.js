import React from 'react';
import FixedOrderCreation from './FixedOrderCreation';

import { Card, CardActionArea, CardHeader, CardMedia, Container, Grid, Slide, Stack, Typography } from '@mui/material';

export default function NewOrder() {
  return (
    <Container maxWidth="xl">
      <Stack pt={3} rowGap={3} alignItems="center">
        <Slide in>
          <Typography variant="h4">Order Type Selection</Typography>
        </Slide>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
            <FixedOrderCreation />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
            <Card variant="outlined" sx={{ width: '100%' }}>
              <CardActionArea disabled>
                <CardMedia
                  alt="Removable"
                  image="/assets/images/removable.webp"
                  sx={{ pt: '70%', m: 1, borderRadius: 2 }}
                />
                <CardHeader
                  title="Removable"
                  subheader={
                    <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                      Removable Description
                    </Typography>
                  }
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
            <Card variant="outlined" sx={{ width: '100%' }}>
              <CardActionArea disabled>
                <CardMedia
                  alt="Orthodontics"
                  image="/assets/images/orthodontics.jpg"
                  sx={{ pt: '70%', m: 1, borderRadius: 2 }}
                />
                <CardHeader
                  title="Orthodontics"
                  subheader={
                    <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                      Orthodontics Description
                    </Typography>
                  }
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
