import * as React from 'react';
import { $light, $success } from '@colors';
import {
  ThemeColors,
  ThemedButton,
  ThemedButtonProps
} from '@ions/button/themes/helpers/ThemedButton';

const successColors: ThemeColors = {
  background: {
    primary: $success[500],
    secondary: $success[700],
    tertiary: $success[300]
  },
  text: {
    primary: $light[100],
    secondary: $success[500]
  },
  border: {
    primary: $success[900],
    secondary: $success[500]
  }
};

const ButtonSuccess = (props: ThemedButtonProps) => (
  <ThemedButton colors={successColors} {...props} />
);

export default ButtonSuccess;
