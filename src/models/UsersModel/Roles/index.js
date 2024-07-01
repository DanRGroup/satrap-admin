import React from 'react';
import {
  Button,
  Dialog,
  Tooltip,
  IconButton,
  DialogTitle,
  DialogActions,
  DialogContent,
  CircularProgress,
  Card,
  CardHeader,
  Avatar,
  Badge,
  Stack,
  Box,
  Typography,
  CardContent,
  Chip,
} from '@mui/material';
import { DeleteOutlineRounded } from '@mui/icons-material';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
// import { isEmptyObject } from 'utils/formatObject';
import graph from './graph';
import { isEmptyObject } from 'helpers/formatObject';
import { FormattedMessage } from 'react-intl';

export default function RolesPopup({ ids, refetch, roles = [] }) {
  const [open, setOpen] = React.useState(false);
  const { userToken } = useSelector((state) => state.auth);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [shopRoleDelete, { loading }] = useMutation(graph.delete.query, {
    context: {
      serviceName: graph.delete.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleDelete = async (ids) => {
    try {
      const { data, errors } = await shopRoleDelete({
        variables: { ids },
      });
      if (!errors) {
        refetch();
        handleClose();
        if (!isEmptyObject(data)) {
          data[graph.delete.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {}
  };

  if (roles) {
    return (
      <>
        <Tooltip title="نقش ها">
          <Badge
            color="error"
            variant="dot"
            overlap="circular"
            invisible={!roles.length}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <IconButton
              disabled={!roles.length}
              size="small"
              color="error"
              onClick={handleOpen}
              sx={{ bgcolor: 'error.lighter' }}
            >
              <AdminPanelSettingsRoundedIcon fontSize="small" />
            </IconButton>
          </Badge>
        </Tooltip>
        <Dialog
          open={open}
          maxWidth="sm"
          onClose={handleClose}
          sx={{ direction: 'ltr' }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperComponent={Box}
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">
            <Typography variant="subtitle1" color="#fff">
              نقش ها
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ p: 1 }}>
            <Stack rowGap={1}>
              {roles.map((item, i) => {
                const { role, labs, units } = item;
                if (units) {
                  return units.map(({ id, type, title }, i) => (
                    <Card key={i}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: 'action.hover' }}>
                            <AdminPanelSettingsRoundedIcon fontSize="small" color="error" />
                          </Avatar>
                        }
                        title={role.title}
                        action={
                          <Chip
                            label={
                              <Typography fontSize={14} variant="subtitle1">
                                <FormattedMessage id={type} />
                                {` ${title}`}
                              </Typography>
                            }
                          />
                        }
                        // action={
                        //   <Stack direction="row" alignItems="center" justifyContent="flex-end" rowGap={0.5}>
                        //     <IconButton color="error" disabled={loading} onClick={() => handleDelete(id)}>
                        //       {loading ? (
                        //         <CircularProgress color="inherit" size={24} />
                        //       ) : (
                        //         <DeleteOutlineRounded fontSize="small" />
                        //       )}
                        //     </IconButton>
                        //   </Stack>
                        // }
                      />
                    </Card>
                  ));
                }
                if (labs) {
                  return labs
                    .filter((x) => x)
                    .map(({ id, title }, i) => (
                      <Card key={i}>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: 'action.hover' }}>
                              <AdminPanelSettingsRoundedIcon fontSize="small" color="error" />
                            </Avatar>
                          }
                          title={role.title}
                          action={
                            <Chip
                              label={
                                <Typography fontSize={14} variant="subtitle1">
                                  {/* <FormattedMessage id="lab" /> */}
                                  {` ${title}`}
                                </Typography>
                              }
                            />
                          }
                          // action={
                          //   <Stack direction="row" alignItems="center" justifyContent="flex-end" rowGap={0.5}>
                          //     <IconButton color="error" disabled={loading} onClick={() => handleDelete(id)}>
                          //       {loading ? (
                          //         <CircularProgress color="inherit" size={24} />
                          //       ) : (
                          //         <DeleteOutlineRounded fontSize="small" />
                          //       )}
                          //     </IconButton>
                          //   </Stack>
                          // }
                        />
                      </Card>
                    ));
                }
              })}
            </Stack>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
