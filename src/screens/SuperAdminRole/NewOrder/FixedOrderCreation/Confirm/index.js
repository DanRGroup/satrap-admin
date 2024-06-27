import React from 'react';
import { Box, Fade, Card, Stack, Avatar, Typography, CardHeader, Chip } from '@mui/material';
import ToothMap from '../ToothSelection/ToothMap';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';

export default function Confirm({ formInfo, formData }) {
  const { patient, doctor, lab, teeth } = formInfo;
  const actions = Object.values(formData).filter((x) => x);
  return (
    <Stack p={1} rowGap={1}>
      <Doctor doctor={doctor} />
      <Stack columnGap={1} rowGap={1} direction={{ xs: 'column', sm: 'row' }}>
        <Stack flex={1} p={1} rowGap={1} borderRadius={2} border="1px solid" borderColor="primary.lighter">
          <Patient patient={patient} />
          <Teeth teeth={teeth} />
        </Stack>
        <Stack flex={2} p={1} rowGap={1} borderRadius={2} border="1px solid" borderColor="primary.lighter">
          <Laboratory laboratory={lab} />
          <Actions actions={actions} />
        </Stack>
      </Stack>
      <Accounting />
    </Stack>
  );
}

function Patient({ patient }) {
  const { firstname, lastname, media } = patient;
  if (patient) {
    return (
      <Stack flex={1} rowGap={1} justifyContent="center">
        <Card sx={{ width: '100%' }}>
          <CardHeader
            title={
              <Typography variant="subtitle2" color="text.disabled" fontSize={12}>
                بیمار
              </Typography>
            }
            subheader={
              <Typography variant="subtitle1" color="text.primary" fontSize={14}>
                {`${firstname} ${lastname}`}
              </Typography>
            }
            avatar={<Avatar src={media[0]?.full_url} sx={{ bgcolor: 'action.hover' }} />}
            action={<Chip color="warning" size="small" label="۲۸ سال" />}
          />
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ py: 1, px: 3 }}
            avatar={<Avatar sx={{ bgcolor: 'pink', width: 24, height: 24 }} />}
            title={
              <Typography variant="subtitle2" color="text.disabled" fontSize={12}>
                رنگ پوست
              </Typography>
            }
            action={
              <Typography variant="subtitle1" fontSize={14}>
                گندمی
              </Typography>
            }
          />
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ py: 1, px: 3 }}
            avatar={<Avatar sx={{ bgcolor: 'success.light', width: 24, height: 24 }} />}
            title={
              <Typography variant="subtitle2" color="text.disabled" fontSize={12}>
                وضعیت
              </Typography>
            }
            action={
              <Typography variant="subtitle1" fontSize={14}>
                نامشخص
              </Typography>
            }
          />
        </Card>
      </Stack>
    );
  }
}

function Teeth({ teeth }) {
  if (teeth) {
    return (
      <Box flex={1}>
        <ToothMap selected={teeth} onSelect={() => {}} />
      </Box>
    );
  }
}

function Doctor({ doctor }) {
  if (doctor) {
    return (
      <Card>
        <Fade in>
          <CardHeader
            title={`دکتر ${doctor.firstname} ${doctor.lastname}`}
            subheader={
              <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                {`تخصص ${doctor?.specialist}`}
              </Typography>
            }
            avatar={<Avatar src={doctor?.media[0]?.full_url} sx={{ bgcolor: 'action.hover', width: 72, height: 72 }} />}
          />
          {/* <CardContent sx={{ p: 2 }}>
            <TextField fullWidth multiline minRows={3} variant="outlined" placeholder="توضیحات پزشک..." />
          </CardContent> */}
        </Fade>
      </Card>
    );
  }
}

function Laboratory({ laboratory }) {
  if (laboratory) {
    return (
      <Fade in>
        <Card>
          <CardHeader
            title={laboratory.title}
            avatar={
              <Avatar sx={{ bgcolor: 'action.hover' }}>
                <ScienceRoundedIcon fontSize="medium" color="primary" />
              </Avatar>
            }
          />
        </Card>
      </Fade>
    );
  }
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
