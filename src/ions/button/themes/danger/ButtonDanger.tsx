import * as React from 'react';
import { functionalRed00, functionalRed01, functionalRed02 } from '@colors';
import { ThemeColors, ThemeWrapperProps } from '@ions/button/themes/types';
import { ThemeWrapper } from '@ions/button/themes/ThemeWrapper';

const dangerColors: ThemeColors = {
  default: {
    backgroundColor: {
      idle: functionalRed02,
      hover: functionalRed01,
      active: functionalRed00
    }
  }
};

const ButtonDanger = (props: ThemeWrapperProps) => (
  <ThemeWrapper colors={dangerColors} {...props} />
);

export default ButtonDanger;
