import React, { useEffect, useState } from 'react';
import graph from './graph';

import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { useQuery } from '@apollo/client';
import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CircularProgress,
  Fade,
  Grid,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

export default function LabSelection({ formData, onChange }) {
  const {
    language: { direction },
  } = useSelector((state) => state.setting);
  
  const { userToken } = useSelector((state) => state.auth);

  const handleClick = (lab) => {
    onChange({ formData: { lab } });
  };

  const { data, loading } = useQuery(graph.list.query, {
    variables: {
      for_admin: 1,
      just_favorites: 1
    },
    context: {
      serviceName: graph.list.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const results = !isEmptyObject(data) ? data[graph.list.name]?.data : [];

  if (loading) {
    return (
      <Stack width="100%" height="100%" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }
  return (
    <Stack p={3} rowGap={3} alignItems="center">
      <Slide in>
        <Typography variant="h4">لطفا لابراتوار مورد نظر را انتخاب کنید</Typography>
      </Slide>

      <Grid container spacing={2}>
        <Lab results={results} formData={formData} handleClick={handleClick} />
        {/* {results.map((item, i) => {
          const isChecked = formData?.lab?.id === item.id;
          return (
            <Grid key={i} item xs={12} sm={6} md={6} lg={4}>
              <Fade in timeout={{ appear: (i + 1) * 200, enter: (i + 1) * 170, exit: (i + 1) * 190 }}>
                <Card
                  variant="outlined"
                  sx={{
                    direction,
                    borderColor: isChecked ? 'primary.lighter' : 'action.disabledBackground',
                    // width: 340,
                  }}
                >
                  <CardActionArea onClick={() => handleClick(item)}>
                    <CardMedia
                      sx={{ pt: '32%', m: 1, borderRadius: 2 }}
                      alt={item.id}
                      image={`/assets/images/covers/cover_${i + 3}.jpg`}
                    />
                    <CardHeader
                      title={item.title}
                      subheader={
                        <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                          {item.alias}
                        </Typography>
                      }
                      avatar={
                        <Avatar sx={{ bgcolor: 'transparent', fontSize: 26, width: 40, height: 40 }}>
                          {isChecked ? (
                            <TaskAltRoundedIcon fontSize="inherit" color="primary" />
                          ) : (
                            <RadioButtonUncheckedRoundedIcon fontSize="inherit" color="action" />
                          )}
                        </Avatar>
                      }
                    />
                  </CardActionArea>
                </Card>
              </Fade>
            </Grid>
          );
        })} */}
      </Grid>
    </Stack>
  );
}

function Lab({ results, formData, handleClick }) {
  const {
    language: { direction },
  } = useSelector((state) => state.setting);
  const isRtl = direction === 'rtl';
  return results.map((item, i) => {
    const isChecked = formData?.lab?.id === item.id;
    return (
      <Grid key={i} item xs={12} sm={6} md={6} lg={4}>
        <Fade in timeout={{ appear: (i + 1) * 200, enter: (i + 1) * 170, exit: (i + 1) * 190 }}>
          <Card
            variant="outlined"
            sx={{
              direction: isRtl && 'ltr',
              borderColor: isChecked ? 'primary.lighter' : 'action.disabledBackground',
              // width: 340,
            }}
          >
            <CardActionArea onClick={() => handleClick(item)}>
              <CardMedia sx={{ pt: '32%', m: 1, borderRadius: 2 }} alt={item.id} image={item?.media[0]?.full_url} />
              <CardHeader
                title={item.title}
                subheader={
                  <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                    {item.alias}
                  </Typography>
                }
                avatar={
                  <Avatar sx={{ bgcolor: 'transparent', fontSize: 26, width: 40, height: 40 }}>
                    {isChecked ? (
                      <TaskAltRoundedIcon fontSize="inherit" color="primary" />
                    ) : (
                      <RadioButtonUncheckedRoundedIcon fontSize="inherit" color="action" />
                    )}
                  </Avatar>
                }
              />
            </CardActionArea>
          </Card>
        </Fade>
      </Grid>
    );
  });
}