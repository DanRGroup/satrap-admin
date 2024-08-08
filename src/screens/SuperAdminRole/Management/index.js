import React from 'react';
import NewContract from './NewContract';
import NewTask from './NewTask';
import NewTariff from './NewTariff';

import { Container, Grid, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';

// const adminComponents = [<NewContract />, <NewContract />];

export default function NewOrder() {
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  return (
    <Container maxWidth="xl">
      <Stack pt={3} rowGap={3} alignItems="center">
        <Grid container>
          {isAuthenticated &&
            hasRequiredRole(['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'], userInfo?.roles) && (
              <>
                <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
                  <NewContract />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
                  <NewTariff />
                </Grid>
              </>
            )}
          <Grid item xs={12} sm={6} md={4} lg={4} p={0.5}>
            <NewTask />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
