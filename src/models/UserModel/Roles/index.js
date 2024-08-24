import React, { useState } from 'react';
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

import { formatUserRoles } from 'helpers';
import RevokeRoleAssignment from '../RevokeRoleAssignment';

export default function RolesPopup({ ids, refetch, roles = [], userId }) {
  const [open, setOpen] = useState(false);
  const { userToken } = useSelector((state) => state.auth);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [deleteRole, { loading }] = useMutation(graph.delete.query, {
    context: {
      serviceName: graph.delete.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleDelete = async (ids) => {
    try {
      const { data, errors } = await deleteRole({
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
                const { role, workshops, sites } = item;
                if (sites) {
                  return sites.map(({ id, type, title }, i) => (
                    <Card key={i}>
                      <CardHeader
                        avatar={
                          <Chip
                            label={
                              <Typography fontSize={14} variant="subtitle1">
                                {` ${title}`}
                              </Typography>
                            }
                          />
                        }
                        title={role.title}
                        action={
                          <RevokeRoleAssignment
                            roleName={role?.name}
                            userId={userId}
                            onClose={handleClose}
                            refetch={refetch}
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
                if (workshops) {
                  return workshops
                    .filter((x) => x)
                    .map(({ id, title }, i) => (
                      <Card key={i}>
                        <CardHeader
                          avatar={
                            <Chip
                              label={
                                <Typography fontSize={14} variant="subtitle1">
                                  {` ${title}`}
                                </Typography>
                              }
                            />
                          }
                          title={role.title}
                          action={
                            <RevokeRoleAssignment
                              ids={id}
                              roleName={role?.name}
                              userId={userId}
                              onClose={handleClose}
                              refetch={refetch}
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
