import React from 'react';
import { Box, Card, Stack, Avatar, Typography, CardHeader, Chip } from '@mui/material';

export default function Confirm({ formData }) {
  const actions = Object.values(formData).filter((x) => x);
  return (
    <Stack p={1} rowGap={1}>
      <Stack columnGap={1} rowGap={1} direction={{ xs: 'column', sm: 'row' }}>
        <Stack flex={2} p={1} rowGap={1} borderRadius={2} border="1px solid" borderColor="primary.lighter">
          <Actions actions={actions} />
        </Stack>
      </Stack>
      <Accounting />
    </Stack>
  );
}

function Actions({ actions }) {
  if (actions) {
    return (
      <Box overflow="scroll">
        <Stack rowGap={1}>
          {actions.map((action, i) => {
            const { parent, title, alias } = Object.values(action)[0];
            return (
              <Card key={i}>
                <CardHeader title={parent} action={<Chip label={title} />} />
              </Card>
            );
          })}
        </Stack>
      </Box>
    );
  }
}

function Accounting({}) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'action.hover', width: 24, height: 24 }} />}
        title={
          <Typography variant="subtitle" color="text.disabled" fontSize={18}>
            مجموع
          </Typography>
        }
        action={<Typography variant="subtitle1">2,340,000</Typography>}
      />
    </Card>
  );
}
