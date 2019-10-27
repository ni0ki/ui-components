import * as React from 'react';
import { $danger, $light } from '@colors';
import {
  ThemeColors,
  ThemedButton,
  ThemedButtonProps
} from '@ions/button/themes/helpers/ThemedButton';

const dangerColors: ThemeColors = {
  background: {
    primary: $danger[500],
    secondary: $danger[700],
    tertiary: $danger[300]
  },
  text: {
    primary: $light[100],
    secondary: $danger[500]
  },
  border: {
    primary: $danger[900],
    secondary: $danger[500]
  }
};

const ButtonDanger = (props: ThemedButtonProps) => (
  <ThemedButton colors={dangerColors} {...props} />
);

export default ButtonDanger;
