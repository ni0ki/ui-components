import * as React from 'react';
import { $light, $secondary } from '@colors';
import {
  ThemeColors,
  ThemedButton,
  ThemedButtonProps
} from '@ions/button/themes/helpers/ThemedButton';

const secondaryColors: ThemeColors = {
  background: {
    primary: $secondary[500],
    secondary: $secondary[700],
    tertiary: $secondary[300]
  },
  text: {
    primary: $light[100],
    secondary: $secondary[500]
  },
  border: {
    primary: $secondary[900],
    secondary: $secondary[500]
  }
};

const ButtonSecondary = (props: ThemedButtonProps) => (
  <ThemedButton colors={secondaryColors} {...props} />
);

export default ButtonSecondary;
