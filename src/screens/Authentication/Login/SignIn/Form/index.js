import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const Form = ({ formData = {}, loading, onSubmit, handleType }) => {
  return (
    <MuiFormBuilder
      submit={<FormattedMessage id="login" />}
      loading={loading}
      formData={formData}
      onSubmit={onSubmit}
      schema={schema()}
      uiSchema={uiSchema()}
    >
      <Button size="small" onClick={() => handleType(3)} sx={{ m: 2 }}>
        <FormattedMessage id="password_forget" />
      </Button>
    </MuiFormBuilder>
  );
};

export default Form;
