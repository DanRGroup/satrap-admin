import { withTheme } from '@rjsf/core';

import { generateTheme } from '../Theme';

export function generateForm() {
  return withTheme(generateTheme());
}

export default generateForm();
