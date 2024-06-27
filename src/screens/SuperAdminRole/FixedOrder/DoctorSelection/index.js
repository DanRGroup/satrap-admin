import graph from './graph';
import Create from './Create';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { AvatarPopover, LoadingMore } from 'components';
import { Card, Grid, Stack, Button, Typography, CardHeader, CardActionArea, Avatar } from '@mui/material';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';

export default function MainModel({ doctor, onChange }) {
  const [flag, setFlag] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState([]);
  const [username, setUsername] = useState('');
  const { userToken } = useSelector((state) => state.auth);
  const [getData, { loading }] = useLazyQuery(graph.list.query);

  const handleChange = (e) => {
    setUsername(e.target.value);
    !e.target.value && setResult([]);
  };
  
  const refetch = () => {
    setResult([]);
    setFlag((prev) => !prev);
  };

  const searchInUsers = async (paginate) => {
    try {
      const { data, error } = await getData({
        variables: {
          page,
          limit,
          username,
          type_ids: '2',
        },
        context: {
          serviceName: graph.list.serviceName,
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        },
      });
      if (!isEmptyObject(data) && !error) {
        const res = data[graph.list.name];
        setTotal(res?.total);
        paginate ? setResult((prevData) => prevData.concat(res?.data)) : setResult(res?.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    let search = setTimeout(() => {
      if (username) {
        setPage(1);
        searchInUsers();
      }
    }, 300);
    return () => clearTimeout(search);
  }, [username]);

  useEffect(() => {
    !username && searchInUsers(page);
  }, [page, flag, username]);

  return (
    <Stack p={1} rowGap={1}>
      <Paper
        elevation={2}
        component="form"
        sx={{ p: 1, display: 'flex', alignItems: 'center', position: 'sticky', top: 8, zIndex: 1 }}
      >
        <IconButton size="medium" aria-label="menu">
          <MenuIcon fontSize="small" />
        </IconButton>
        <InputBase
          autoFocus
          value={username}
          onChange={handleChange}
          sx={{ ml: 1, flex: 1 }}
          placeholder="جستجوی پزشک..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton size="medium" aria-label="search">
          <SearchIcon fontSize="small" />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Create title="create" refetch={refetch} />
      </Paper>
      <Users doctor={doctor} data={result} loading={loading} onChange={onChange} />
      {!username && (
        <LoadingMore
          total={total}
          result={result.length}
          loading={loading}
          onClick={() => setPage((prev) => prev + 1)}
        />
      )}
    </Stack>
  );
}

function Users({ doctor, data, loading, onChange }) {
  if (!data.length && !loading) {
    return <NotFound />;
  }
  return (
    <Grid container>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} p={0.5}>
          <Model isSelected={doctor?.id === item.id} data={item} onChange={onChange} />
        </Grid>
      ))}
    </Grid>
  );
}

function NotFound() {
  return (
    <Stack minHeight={400} justifyContent="center" alignItems="center">
      <img width={280} src="/assets/images/not-found.jpg" />
      <Typography variant="caption" color="text.disabled">
        موردی یافت نشد
      </Typography>
      <Button sx={{ mt: 1, minWidth: 180 }} variant="outlined">
        پزشک جدید
      </Button>
    </Stack>
  );
}

function Model({ isSelected, data, onChange }) {
  const { firstname, lastname, cellphone, media } = data;
  return (
    <Card
      variant="outlined"
      sx={{
        position: 'relative',
        bgcolor: 'transparent',
        width: { xs: '100%' },
        // direction: isRtl && 'ltr',
        borderColor: isSelected ? 'primary.main' : 'action.disabledBackground',
      }}
    >
      <CardActionArea onClick={() => onChange({ formData: { doctor: data }, next: false })}>
        <CardHeader
          subheader={cellphone}
          title={`${firstname} ${lastname}`}
          avatar={<AvatarPopover media={media[0]?.full_url} />}
          action={
            <Avatar
              sx={{
                width: 24,
                height: 24,
                fontSize: 26,
                bgcolor: 'transparent',
              }}
            >
              {isSelected ? (
                <TaskAltRoundedIcon fontSize="small" color="primary" />
              ) : (
                <RadioButtonUncheckedRoundedIcon fontSize="small" color="action" />
              )}
            </Avatar>
          }
        />
      </CardActionArea>
    </Card>
  );
}
