import 'styled-components';
import { StateColor } from '@ions/theme/types';

export interface ThemeConfig {
  backgroundColor?: StateColor;
  borderColor?: StateColor;
  textColor?: string | StateColor;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeConfig {}
}
