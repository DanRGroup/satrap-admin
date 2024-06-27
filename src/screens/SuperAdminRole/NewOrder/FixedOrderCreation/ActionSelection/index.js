import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  Fade,
  Card,
  Chip,
  Stack,
  Avatar,
  Collapse,
  CardMedia,
  Typography,
  IconButton,
  CardHeader,
  CardContent,
  CardActionArea,
} from '@mui/material';

import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';

export default function Section({ section = 'instructions', data, formData, onChange, isActive = false }) {
  const onClick = ({ parent, title, alias }) => {
    onChange({
      // formData: { [section]: { [parent]: alias } },
      formData: { [section]: { [parent]: { parent, title, alias } } },
      next: false,
    });
  };

  const onClear = () => {
    onChange({
      formData: { [section]: undefined },
      next: false,
    });
  };

  useEffect(() => {
    if (!isActive) {
      onClear();
    }
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return (
    <Stack rowGap={2}>
      <Model section={section} data={data} formData={formData} onClick={onClick} onClear={onClear} />
    </Stack>
  );
}

function Model({ section, data, formData, onClick, onClear }) {
  const {
    language: { direction },
  } = useSelector((state) => state.setting);
  const isRtl = direction === 'rtl';
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState();
  const onExpand = () => setExpanded(!expanded);
  const handleClick = ({parent, title, alias}) => {
    onClick({ parent, title, alias });
    setSelected(alias ? { parent, title, alias } : undefined);
    alias && setExpanded(false);
  };
  const handleClear = () => {
    onClear();
    setExpanded(true);
    setSelected(undefined);
  };
  return data.map((item, i) => {
    const isSelected =
      formData[section] && Object.keys(formData[section]).find((x) => x === item.alias && formData[section][x]?.alias);
    return (
      <Fade key={i} in timeout={{ appear: (i + 1) * 200, enter: (i + 1) * 170, exit: (i + 1) * 190 }}>
        <Card
          variant="outlined"
          sx={{
            position: 'relative',
            bgcolor: 'transparent',
            width: { xs: '100%' },
            direction: isRtl && 'ltr',
            borderColor: isSelected ? 'primary.main' : 'action.disabledBackground',
          }}
        >
          <Stack direction="row-reverse" columnGap={0.5} sx={{ position: 'absolute', top: 12, right: 8, zIndex: 1 }}>
            {formData[section] && (
              <IconButton color='warning' size="small" onClick={handleClear}>
                <UndoRoundedIcon fontSize="small" />
              </IconButton>
            )}
            {selected && <Chip label={selected?.title} />}
          </Stack>
          <CardActionArea onClick={onExpand}>
            <CardHeader
              sx={{ px: 1, py: 1, pr: 5 }}
              title={item.title}
              subheader={
                !selected && (
                  <Typography variant="body2" fontSize={12} align="justify" color="text.secondary">
                    {item?.description}
                  </Typography>
                )
              }
              avatar={<Avatar variant="rounded" alt={item.title} src={item?.image || "/assets/images/picture.png"} />}
              // action={
              //   <Stack direction="row" columnGap={0.5} pl={2}>
              //     {selected && <Chip label={selected?.title} />}
              //     {/* <ExpandMoreButton open="open" close="close" onClick={onExpand} expand={expanded}>
              //       <KeyboardArrowUpRoundedIcon color="warning" fontSize="small" />
              //     </ExpandMoreButton> */}
              //   </Stack>
              // }
            />
          </CardActionArea>
          <Collapse in={expanded} timeout="auto">
            <CardContent
              sx={{
                py: 1,
                flex: 1,
                columnGap: 0.5,
                borderRadius: 2,
                scrollPadding: 24,
                display: 'flex',
                overflowY: 'hidden',
                alignItems: 'center',
                overflowX: 'scroll !important',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {item.children.map((child, c) => {
                const isSelectedChild = formData[section] && formData[section][item.alias]?.alias === child.alias;
                return (
                  <Box key={c} sx={{ scrollSnapAlign: 'center' }}>
                    <Card sx={{ width: 140, position: 'relative', bgcolor: child?.bgcolor || "#fff" }}>
                      <CardActionArea
                        onClick={() =>
                          handleClick({
                            parent: item.alias,
                            title: child.title,
                            alias: isSelectedChild ? undefined : child.alias,
                          })
                        }
                      >
                        {child.image && (
                          <CardMedia
                            alt={child.title}
                            image={child.image}
                            sx={{
                              m: 1,
                              pt: '50%',
                              borderRadius: 2,
                            }}
                          />
                        )}

                        <CardHeader
                          sx={{ py: 1, height: 64 }}
                          title={<Typography variant="subtitle2">{child.title}</Typography>}
                          avatar={
                            <Avatar
                              sx={{
                                width: 24,
                                height: 24,
                                fontSize: 26,
                                bgcolor: 'transparent',
                              }}
                            >
                              {isSelectedChild ? (
                                <TaskAltRoundedIcon fontSize="small" color="primary" />
                              ) : (
                                <RadioButtonUncheckedRoundedIcon fontSize="small" color="action" />
                              )}
                            </Avatar>
                          }
                        />
                      </CardActionArea>
                    </Card>
                  </Box>
                );
              })}
            </CardContent>
          </Collapse>
        </Card>
      </Fade>
    );
  });
}
