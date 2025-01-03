import TextField from '@mui/material/TextField';
import { examplesId, labelValue, getInputProps, ariaDescribedByIds } from '@rjsf/utils';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { digitsFaToEn } from '@persian-tools/persian-tools';

const TYPES_THAT_SHRINK_LABEL = ['date', 'datetime-local', 'file', 'time'];

/** The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the `core` theme.
 * It is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.
 * It can be customized/overridden for other themes or individual implementations as needed.
 *
 * @param props - The `WidgetProps` for this template
 */
export default function BaseInputTemplate(props) {
  const {
    id,
    name, // remove this from textFieldProps
    placeholder,
    required,
    readonly,
    disabled,
    type,
    label,
    hideLabel,
    hideError,
    value,
    onChange,
    onChangeOverride,
    onBlur,
    onFocus,
    autofocus,
    options,
    schema,
    uiSchema,
    rawErrors = [],
    errorSchema,
    formContext,
    registry,
    InputLabelProps,
    ...textFieldProps
  } = props;
  const inputProps = getInputProps(schema, type, options);
  // Now we need to pull out the step, min, max into an inner `inputProps` for material-ui
  const { step, min, max, ...rest } = inputProps;
  const otherProps = {
    inputProps: {
      step,
      min,
      max,
      ...(schema.examples ? { list: examplesId(id) } : undefined),
    },
    ...rest,
  };

  const _onChange = ({ target: { value } }) => onChange(value === '' ? options.emptyValue : digitsFaToEn(value));
  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);
  const DisplayInputLabelProps = TYPES_THAT_SHRINK_LABEL.includes(type)
    ? {
        ...InputLabelProps,
        shrink: true,
      }
    : InputLabelProps;

  const {
    language: { direction },
  } = useSelector((state) => state.setting);

  return (
    <>
      <TextField
        id={id}
        name={id}
        placeholder={placeholder}
        dir={direction}
        label={<FormattedMessage id={labelValue(label || undefined, hideLabel, undefined)} />}
        autoFocus={autofocus}
        required={required}
        disabled={disabled || readonly}
        {...otherProps}
        value={value || value === 0 ? value : ''}
        error={rawErrors.length > 0}
        onChange={onChangeOverride || _onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        InputLabelProps={DisplayInputLabelProps}
        {...textFieldProps}
        aria-describedby={ariaDescribedByIds(id, !!schema.examples)}
      />
      {Array.isArray(schema.examples) && (
        <datalist id={examplesId(id)}>
          {schema.examples
            .concat(schema.default && !schema.examples.includes(schema.default) ? [schema.default] : [])
            .map((example) => {
              return <option key={example} value={example} />;
            })}
        </datalist>
      )}
    </>
  );
}
