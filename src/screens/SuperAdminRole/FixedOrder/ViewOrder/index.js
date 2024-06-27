import graph from './graph';
import MediaUploader from '../MediaUploader';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import { StlViewer } from 'react-stl-viewer';

import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import {
  Box,
  Chip,
  Fade,
  Card,
  Paper,
  Stack,
  Button,
  Avatar,
  CardMedia,
  CardHeader,
  IconButton,
  Typography,
  CardContent,
  CircularProgress,
  Divider,
} from '@mui/material';
import ToothSelection from '../ToothSelection';
import { Link } from 'react-router-dom';

export default function OrderScreen({ id }) {
  const { userToken } = useSelector((state) => state.auth);
  const { data, loading, refetch } = useQuery(graph.get.query, {
    context: {
      serviceName: graph.get.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
    variables: {
      ids: id,
      for_admin: 1,
    },
  });

  const order = data && data[graph.get.name]?.data[0];

  if (loading) {
    return <Loading />;
  }

  if (!order) {
    return <NotFound refetch={() => refetch()} />;
  }

  return <Content order={order} refetch={() => refetch()} />;
}

function Content({ order, refetch }) {
  //   console.log('order', order);
  const { id, customer: patient, doctor, unit, technical_informations, demand_time, description, media } = order;
  const modified = JSON.parse(technical_informations);
  const models = media.map((x) => x?.file_name.search('.stl') && x);
  //   console.log('models', models);
  //   const images = media.filter((x) => x.mime_type !== 'application/octet-stream');

  return (
    <>
      <Card>
        <CardHeader
          title={<Typography variant="subtitle1">{`سفارش شماره ${3244}`}</Typography>}
          action={
            <Button LinkComponent={Link} to="/orders/list">
              لیست سفارشات
            </Button>
          }
        />
      </Card>
      <Stack flexGrow={1} direction={{ xs: 'column', sm: 'row' }}>
        <Stack flex={3} rowGap={1}>
          <Paper sx={{ borderRadius: 2, display: 'flex', justifyContent: 'center' }}>
            <ToothSelection modified={modified} />
          </Paper>
          <Paper sx={{ borderRadius: 2, display: 'flex', flexDirection: 'column', rowGap: 1 }}>
            {modified.map((item, i) => {
              const { action, color, tooth, details } = item;
              const vals = Object.values(details);
              return (
                <Card key={i} sx={{ borderColor: color }}>
                  <CardHeader title={action} />
                  <CardContent>
                    <Actions actions={vals} />
                  </CardContent>
                </Card>
              );
            })}
          </Paper>
        </Stack>
        <Stack flex={4} rowGap={2} p={2}>
          <Typography variant="subtitle1" fontSize={14}>
            مشخصات بیمار
          </Typography>
          <Patient patient={patient} />
          <Stack direction="row" flexWrap="wrap" rowGap={1} columnGap={1}>
            <MediaUploader title="تصویر یا فایل" collection="models" model="Order" modelId={id} refetch={refetch} />
            {media.map((image, i) => (
              <Card sx={{ width: 160, height: 160 }} key={i}>
                <CardMedia sx={{ pt: '100%' }} image={image?.full_url} />
              </Card>
            ))}
          </Stack>
          <StlViewer
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: 300,
              border: '1px dashed #ccc',
              borderRadius: 20,
            }}
            orbitControls
            shadows
            url="/assets/dental.stl"
          />
          <Divider variant="middle" />
          <Typography variant="subtitle1" fontSize={14}>
            مشخصات پزشک
          </Typography>
          <Doctor doctor={doctor} description={description} />
        </Stack>
      </Stack>
      <Stack
        p={2}
        bottom={8}
        borderRadius={2}
        position="sticky"
        sx={{ direction: 'ltr' }}
        justifyContent="flex-end"
        bgcolor="background.paper"
        alignItems="center"
        direction="row"
      >
        <IconButton onClick={refetch}>
          <PrintRoundedIcon />
        </IconButton>
        <Button>ثبت سفارش جدید</Button>
        <Button variant="contained">ارسال به لابراتوار</Button>
      </Stack>
    </>
  );
}

function Loading() {
  return (
    <Stack justifyContent="center" alignItems="center" minHeight={400} width="100%" rowGap={2}>
      <CircularProgress />
      <Typography color="text.disabled" variant="caption" textAlign="center">
        در حال بارگذاری
      </Typography>
    </Stack>
  );
}

function NotFound({ refetch }) {
  return (
    <Stack justifyContent="center" alignItems="center" minHeight={400} width="100%" rowGap={2}>
      <Typography color="text.disabled" variant="subtitle1" textAlign="center">
        موردی یافت نشد!
      </Typography>
      {refetch && (
        <Button variant="outlined" color="error" size="small" onClick={refetch}>
          بارگذاری مجدد
        </Button>
      )}
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
              <Card variant="outlined" key={i}>
                <CardHeader title={parent} action={<Chip label={title} />} />
              </Card>
            );
          })}
        </Stack>
      </Box>
    );
  }
}

function Doctor({ doctor, description }) {
  if (doctor) {
    return (
      <Fade in>
        <Card>
          <CardHeader
            title={`${doctor.firstname} ${doctor.lastname}`}
            subheader={
              doctor?.specialist && (
                <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                  {`تخصص ${doctor?.specialist}`}
                </Typography>
              )
            }
            avatar={<Avatar src={doctor?.media[0]?.full_url} sx={{ bgcolor: 'action.hover', width: 72, height: 72 }} />}
          />
          {description && (
            <CardContent sx={{ p: 2 }}>
              <Typography variant="body2" gutterBottom>
                توضیحات پزشک
              </Typography>
              <Typography variant="body1" paragraph>
                {description}
              </Typography>
              {/* <TextField fullWidth multiline minRows={3} variant="outlined" placeholder="توضیحات پزشک..." /> */}
            </CardContent>
          )}
        </Card>
      </Fade>
    );
  }
}

function Patient({ patient }) {
  const { firstname, lastname, media } = patient;
  if (patient) {
    return (
      <Stack rowGap={1} justifyContent="center">
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
