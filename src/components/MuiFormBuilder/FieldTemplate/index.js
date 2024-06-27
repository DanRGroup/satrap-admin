import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { getTemplate, getUiOptions } from '@rjsf/utils';

/** The `FieldTemplate` component is the template used by `SchemaField` to render any field. It renders the field
 * content, (label, description, children, errors and help) inside of a `WrapIfAdditional` component.
 *
 * @param props - The `FieldTemplateProps` for this component
 */
export default function FieldTemplate(props) {
  const {
    id,
    children,
    classNames,
    style,
    disabled,
    displayLabel,
    hidden,
    label,
    onDropPropertyClick,
    onKeyChange,
    readonly,
    required,
    rawErrors = [],
    errors,
    help,
    description,
    rawDescription,
    schema,
    uiSchema,
    registry,
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const WrapIfAdditionalTemplate = getTemplate('WrapIfAdditionalTemplate', registry, uiOptions);

  if (hidden) {
    return <div style={{ display: 'none' }}>{children}</div>;
  }

  const { xs = 12, sm = 12, md = 12, lg = 12, xl = 12 } = uiOptions;

  return (
    <Grid item={true} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <WrapIfAdditionalTemplate
        classNames={classNames}
        style={style}
        disabled={disabled}
        id={id}
        label={label}
        onDropPropertyClick={onDropPropertyClick}
        onKeyChange={onKeyChange}
        readonly={readonly}
        required={required}
        schema={schema}
        uiSchema={uiSchema}
        registry={registry}
      >
        <FormControl fullWidth={true} error={rawErrors.length ? true : false} required={required}>
          {children}
          {displayLabel && rawDescription ? (
            <Typography variant="caption" color="textSecondary">
              {description}
            </Typography>
          ) : null}
          {errors}
          {help}
        </FormControl>
      </WrapIfAdditionalTemplate>
    </Grid>
  );
}
