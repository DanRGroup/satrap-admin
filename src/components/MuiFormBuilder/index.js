import './style.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import validator from '@rjsf/validator-ajv6';
import MuiFormBuilder from './MuiFormBuilder';

import { transformErrors } from './utils';
import { LocationField } from './CustomFields';
import { removeNulls } from 'helpers/formatObject';

const MuiForm = ({
  onError,
  onSubmit,
  onChange,
  formData,
  children,
  schema = {},
  uiSchema = {},
  customValidate,
  submit = 'ذخیره',
  loading = false,
  disabled = false,
  showSubmit = true,
  liveValidate = false,
  showErrorList = false,
}) => {
  return (
    <MuiFormBuilder
      noHtml5Validate
      focusOnFirstError
      schema={schema}
      onError={onError}
      onChange={onChange}
      onSubmit={onSubmit}
      uiSchema={uiSchema}
      validator={validator}
      liveValidate={liveValidate}
      showErrorList={showErrorList}
      customValidate={customValidate}
      transformErrors={transformErrors}
      formData={removeNulls(formData)}
      fields={{ location: LocationField }}
    >
      {
        <Stack columnGap={1} direction="row" alignItems="center" justifyContent="flex-end">
          {children}
          {showSubmit && (
            <Button
              size="medium"
              type="submit"
              color="primary"
              variant="contained"
              sx={{ minWidth: 120 }}
              disabled={loading || disabled}
            >
              {loading ? <CircularProgress size={24} color="secondary" /> : submit}
            </Button>
          )}
        </Stack>
      }
    </MuiFormBuilder>
  );
};

export default MuiForm;
