import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color?: string;
    background: string;
    hoverBorder: string;
    activeBackground: string;
  }
}
