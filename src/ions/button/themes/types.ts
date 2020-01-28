import { Props as ButtonProps } from '@atoms/button/Button';

export type ButtonState = 'idle' | 'hover' | 'active';
type ButtonStateColor = {
  [key in ButtonState]?: string;
};

export interface ModeThemeConfig {
  backgroundColor: ButtonStateColor;
  borderColor?: ButtonStateColor;
  textColor?: string;
}
export interface ThemeColors {
  dark?: ModeThemeConfig; // Dashlane darker theme
  default: ModeThemeConfig; // Default light theme
}

export type ThemeWrapperProps = Omit<ButtonProps, 'nature'>;
