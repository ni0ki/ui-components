import * as React from 'react';
import {
  dashDarkerGreen00,
  dashGreen00,
  midGreen00,
  midGreen01,
  midGreen03,
  white
} from '@colors';
import { ThemeColors, ThemeWrapperProps } from '@ions/button/themes/types';
import { ThemeWrapper } from '@ions/button/themes/ThemeWrapper';

const primaryColors: ThemeColors = {
  default: {
    backgroundColor: {
      idle: midGreen00,
      hover: dashGreen00,
      active: dashDarkerGreen00
    }
  },
  dark: {
    backgroundColor: {
      idle: white,
      hover: midGreen03,
      active: midGreen01
    },
    textColor: dashGreen00
  }
};

const ButtonPrimary = (props: ThemeWrapperProps) => (
  <ThemeWrapper colors={primaryColors} {...props} />
);

export default ButtonPrimary;
