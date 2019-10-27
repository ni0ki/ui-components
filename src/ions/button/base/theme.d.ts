import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: string;
    background: string;
    hover: {
      border?: string;
      background: string;
    };
    active: {
      border?: string;
      color?: string;
      background: string;
    };
    disabled: {
      color?: string;
      background?: string;
    };
  }
}
