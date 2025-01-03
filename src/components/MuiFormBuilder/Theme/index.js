import { generateTemplates } from '../Templates';
import { generateWidgets } from '../Widgets';

export function generateTheme() {
  return {
    templates: generateTemplates(),
    widgets: generateWidgets(),
  };
}

export default generateTheme();
