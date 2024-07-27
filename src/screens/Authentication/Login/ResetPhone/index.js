import { toast } from 'react-toastify';
import { isEmptyObject } from 'helpers/formatObject';
import { useMutation } from '@apollo/client';
import { Typography, Card, CardHeader, CardContent, Box, Stack } from '@mui/material';

import Form from './Form';
import graph from '../graph';

// ----------------------------------------------------------------------

export default function ResetPhone({ handleType }) {
  const [forget] = useMutation(graph.forget.query);

  const onSubmit = async ({ formData }) => {
    try {
      const { data, errors } = await forget({
        variables: formData,
      });
      if (!errors && !isEmptyObject(data)) {
        handleType(4, formData);
        toast.success('کد بازیابی رمز عبور به تلفن همراه شما ارسال گردید');
        data[graph.forget.name]?.messages.map((message) => toast.success(String(message)));
      }
    } catch (error) {}
  };
  return (
    // <Card sx={{ width: 360 }} elevation={0}>
    //   <CardHeader
    //     title={<Typography variant="h4">فراموشی رمز عبور</Typography>}
    //     subheader={<Typography sx={{ color: 'text.secondary' }}>لطفا شماره همراه خود را وارد نمایید</Typography>}
    //   />
    //   <CardContent sx={{ p: 1 }}>
    //     <Form onSubmit={onSubmit} handleType={handleType} />
    //   </CardContent>
    // </Card>
    <Box width={340}>
      <Stack sx={{ m: 2 }}>
        <Typography variant="h4">فراموشی رمز عبور</Typography>
        <Typography sx={{ color: 'text.secondary' }}>لطفا شماره همراه خود را وارد نمایید</Typography>
      </Stack>
      <Form onSubmit={onSubmit} handleType={handleType} />
    </Box>
  );
}
