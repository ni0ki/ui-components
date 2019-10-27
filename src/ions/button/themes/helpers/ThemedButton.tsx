import * as React from 'react';
import { Props as ButtonProps } from '@atoms/button/Button';
import { getThemeByVariant } from '@ions/button/themes/helpers/themeHelper';
import { BaseButton } from '@ions/index';

export interface ThemeColors {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary?: string;
  };
  border: {
    primary: string;
    secondary: string;
    tertiary?: string;
  };
}

export type ThemedButtonProps = Omit<ButtonProps, 'nature'>;

interface Props extends ThemedButtonProps {
  colors: ThemeColors;
}

export const ThemedButton = ({ colors, ...props }: Props) => {
  const theme = getThemeByVariant(colors, props.variant);

  return <BaseButton theme={theme} {...props} />;
};
