import { Props as ButtonProps } from '@atoms/button/Button';
import { StateColor as ButtonStateColor } from '@ions/theme/types';

export interface ButtonThemeConfig {
  backgroundColor: ButtonStateColor;
  borderColor?: ButtonStateColor;
  textColor?: string;
}

export type ThemeWrapperProps = Omit<ButtonProps, 'nature'>;
