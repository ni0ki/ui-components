import * as React from 'react';
import { BaseButton } from '@ions';
import { ThemeColors, ThemeWrapperProps } from '@ions/button/themes/types';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps
} from 'styled-components';

interface Props extends ThemeWrapperProps {
  colors: ThemeColors;
  customStyle?: FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>;
}

export const ThemeWrapper = ({
  colors,
  theme = 'default',
  ...props
}: Props) => {
  const buttonTheme =
    theme === 'dark' && colors.dark ? colors.dark : colors.default;

  return <BaseButton theme={buttonTheme} {...props} />;
};
