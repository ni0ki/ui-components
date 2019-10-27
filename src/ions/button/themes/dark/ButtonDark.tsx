import * as React from 'react';
import { $light } from '@colors';
import {
  ThemeColors,
  ThemedButton,
  ThemedButtonProps
} from '@ions/button/themes/helpers/ThemedButton';

const darkColors: ThemeColors = {
  background: {
    primary: $light[400],
    secondary: $light[500],
    tertiary: $light[300]
  },
  text: {
    primary: $light[700]
  },
  border: {
    primary: $light[600],
    secondary: $light[400],
    tertiary: $light[600]
  }
};

const ButtonDark = (props: ThemedButtonProps) => (
  <ThemedButton colors={darkColors} {...props} />
);

export default ButtonDark;
