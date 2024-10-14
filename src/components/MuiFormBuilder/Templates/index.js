import AddButton from '../AddButton';
import ArrayFieldItemTemplate from '../ArrayFieldItemTemplate';
import ArrayFieldTemplate from '../ArrayFieldTemplate';
import BaseInputTemplate from '../BaseInputTemplate';
import DescriptionFieldTemplate from '../DescriptionFieldTemplate';
import ErrorListTemplate from '../ErrorListTemplate';
import { CopyButton, MoveDownButton, MoveUpButton, RemoveButton } from '../IconButton';
import FieldErrorTemplate from '../FieldErrorTemplate';
import FieldHelpTemplate from '../FieldHelpTemplate';
import FieldTemplate from '../FieldTemplate';
import ObjectFieldTemplate from '../ObjectFieldTemplate';
import SubmitButton from '../SubmitButton';
import TitleFieldTemplate from '../TitleFieldTemplate';
import WrapIfAdditionalTemplate from '../WrapIfAdditionalTemplate';

export function generateTemplates() {
  return {
    ArrayFieldItemTemplate,
    ArrayFieldTemplate,
    BaseInputTemplate,
    ButtonTemplates: {
      AddButton,
      CopyButton,
      MoveDownButton,
      MoveUpButton,
      RemoveButton,
      SubmitButton,
    },
    DescriptionFieldTemplate,
    ErrorListTemplate,
    FieldErrorTemplate,
    FieldHelpTemplate,
    FieldTemplate,
    ObjectFieldTemplate,
    TitleFieldTemplate,
    WrapIfAdditionalTemplate,
  };
}

export default generateTemplates();
