/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { darkTheme } from './theme';

export type Theme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
