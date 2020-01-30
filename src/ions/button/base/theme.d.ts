import 'styled-components';
import { ModeThemeConfig } from '@ions/button/themes/types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ModeThemeConfig {}
}
