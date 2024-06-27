import CheckboxWidget from '../CheckboxWidget';
import CheckboxesWidget from '../CheckboxesWidget';
import RadioWidget from '../RadioWidget';
import RangeWidget from '../RangeWidget';
import SelectWidget from '../SelectWidget';
import TextareaWidget from '../TextareaWidget';

import { PersianDateWidget } from '../CustomWidgets';
// import DateTimeWidget from "../DateTimeWidget";
// import SwitchWidget from "../SwitchWidget";

export function generateWidgets() {
  return {
    CheckboxWidget,
    CheckboxesWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    TextareaWidget,

    DateWidget: PersianDateWidget,
    // CheckboxWidget: SwitchWidget,
    // DateTimeWidget: DateTimeWidget,
  };
}

export default generateWidgets();
