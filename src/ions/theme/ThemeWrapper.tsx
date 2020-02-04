import * as React from 'react';
import { Theme, ThemeColors } from '@ions/theme/types';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps
} from 'styled-components';

export function ThemeWrapper<L extends { theme?: 'default' | 'dark' }, K>(
  Component: React.ComponentType<
    Omit<Partial<L>, 'theme'> & {
      theme: Theme;
      customStyle?: FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>;
    }
  >,
  colors: ThemeColors<K>,
  customStyle = {}
) {
  return function wrapWithTheme({ theme = 'default', ...props }: Partial<L>) {
    const selectedTheme =
      theme === 'dark' && colors.dark ? colors.dark : colors.default;

    return (
      <Component theme={selectedTheme} {...props} customStyle={customStyle} />
    );
  };
}
