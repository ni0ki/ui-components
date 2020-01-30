import * as React from 'react';
import {
  dashGreen00,
  dashGreen01,
  dashGreen02,
  dashGreen03,
  dashGreen05,
  transparent
} from '@colors';
import { ThemeColors, ThemeWrapperProps } from '@ions/button/themes/types';
import { ThemeWrapper } from '@ions/button/themes/ThemeWrapper';

const secondaryColors: ThemeColors = {
  default: {
    backgroundColor: {
      idle: transparent,
      hover: dashGreen05,
      active: dashGreen03
    },
    textColor: dashGreen00,
    borderColor: {
      idle: dashGreen05,
      hover: dashGreen05,
      active: dashGreen03
    }
  },
  dark: {
    backgroundColor: {
      idle: transparent,
      hover: dashGreen01,
      active: dashGreen02
    },
    borderColor: {
      idle: dashGreen01,
      hover: dashGreen01,
      active: dashGreen02
    }
  }
};

const ButtonSecondary = (props: ThemeWrapperProps) => (
  <ThemeWrapper colors={secondaryColors} {...props} />
);

export default ButtonSecondary;
