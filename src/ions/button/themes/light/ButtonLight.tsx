import * as React from 'react';
import { $light } from '@colors';
import {
  ThemeColors,
  ThemedButton,
  ThemedButtonProps
} from '@ions/button/themes/helpers/ThemedButton';

const lightColors: ThemeColors = {
  background: {
    primary: $light[300],
    secondary: $light[400],
    tertiary: $light[200]
  },
  text: {
    primary: $light[700]
  },
  border: {
    primary: $light[500],
    secondary: $light[300],
    tertiary: $light[600]
  }
};

const ButtonLight = (props: ThemedButtonProps) => (
  <ThemedButton colors={lightColors} {...props} />
);

export default ButtonLight;
