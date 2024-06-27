import { Box, Stack } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  labelValue,
  optionId,
} from '@rjsf/utils';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

/** The `RadioWidget` is a widget for rendering a radio group.
 *  It is typically used with a string property constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function RadioWidget({
  id,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  hideLabel,
  onChange,
  onBlur,
  onFocus,
}) {
  const { enumOptions, enumDisabled, emptyValue } = options;

  const _onChange = (_, value) => onChange(enumOptionsValueForIndex(value, enumOptions, emptyValue));
  const _onBlur = ({ target: { value } }) => onBlur(id, enumOptionsValueForIndex(value, enumOptions, emptyValue));
  const _onFocus = ({ target: { value } }) => onFocus(id, enumOptionsValueForIndex(value, enumOptions, emptyValue));

  const row = options ? options.inline : false;
  const selectedIndex = enumOptionsIndexForValue(value, enumOptions) ?? null;

  const {
    language: { direction },
  } = useSelector((state) => state.setting);

  return (
    <Stack sx={{ direction }} border="1px solid" borderColor="action.selected" borderRadius={2} px={1.5} py={0.5}>
      {labelValue(
        <FormLabel dir={direction} required={required} htmlFor={id}>
          {label ? <FormattedMessage id={label} /> : undefined}
        </FormLabel>,
        hideLabel
      )}
      <RadioGroup
        id={id}
        name={id}
        value={selectedIndex}
        row={row}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        aria-describedby={ariaDescribedByIds(id)}
        dir={direction}
      >
        {Array.isArray(enumOptions) &&
          enumOptions.map((option, index) => {
            const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
            const radio = (
              <FormControlLabel
                control={<Radio name={id} id={optionId(id, index)} color="primary" />}
                label={<FormattedMessage id={option.label} />}
                value={String(index)}
                key={index}
                disabled={disabled || itemDisabled || readonly}
              />
            );

            return radio;
          })}
      </RadioGroup>
    </Stack>
  );
}
