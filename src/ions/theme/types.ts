import { DefaultTheme } from 'styled-components';

export type Theme = {
  [key in keyof DefaultTheme]: DefaultTheme[key];
};

export type State = 'idle' | 'hover' | 'active';

export type StateColor = {
  [key in State]?: string;
};

export interface ThemeColors<T> {
  dark?: T; // Dashlane darker theme
  default: T; // Default light theme
}
