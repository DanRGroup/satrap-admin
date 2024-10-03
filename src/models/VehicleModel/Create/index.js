import React, { useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';
import { FormattedMessage } from 'react-intl';

export default function CreatePopup({ title, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { userToken } = useSelector((state) => state.auth);
  const [plaque, setPlaque] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const [formUpdate, { loading }] = useMutation(graph.create.query, {
    context: {
      serviceName: graph.create.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onChange = ({ formData }) => {
    setFormData(formData);
  };

  const onSubmit = async () => {
    try {
      const { data, errors } = await formUpdate({
        variables: { ...formData, status: 'IDLE' },
      });
      if (!errors) {
        refetch();
        onClose();
        setFormData({});
        if (!isEmptyObject(data)) {
          data[graph.create.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {
      setFormData(formData);
    }
  };

  const handlePlaqueChange = (index, event) => {
    const value = event.target.value.toUpperCase();
    if (value.length <= 1) {
      const newPlaque = [...plaque];
      newPlaque[index] = value;
      setPlaque(newPlaque);

      // Move to next input if current is filled
      if (value.length === 1 && index < 6) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  return (
    <>
      <Tooltip title={title}>
        <IconButton
          size="medium"
          color="warning"
          onClick={onOpen}
          disabled={loading}
          sx={{ bgcolor: 'action.selected' }}
        >
          <AddCircleOutlineRounded fontSize="small" />
        </IconButton>
      </Tooltip>
      <NewDialog label="create" open={open} onClose={onClose} maxWidth="xs">
        <NewDialogTitle title={title} onClose={onClose} />
        <NewDialogContent>
          <Stack p={2} alignItems="center">
            <Form formData={formData} onChange={onChange} />
            <Box dir="ltr">
              <Box display="flex" justifyContent="center">
                {plaque.map((char, index) => (
                  <TextField
                    key={index}
                    value={char}
                    onChange={(e) => handlePlaqueChange(index, e)}
                    inputRef={(el) => (inputRefs.current[index] = el)}
                    variant="outlined"
                    size="small"
                    inputProps={{
                      style: {
                        textTransform: 'uppercase',
                        width: '1.5em',
                        textAlign: 'center',
                      },
                      maxLength: 1,
                    }}
                    sx={{ mr: index === 2 ? 1 : 0.5, ml: index === 2 ? 1 : 0.5 }}
                  />
                ))}
              </Box>
            </Box>
          </Stack>
        </NewDialogContent>
        <NewDialogActions>
          <Button size="large" variant="contained" onClick={onSubmit}>
            <FormattedMessage id="create" />
          </Button>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
