import * as React from 'react';
import {
  dashGreen00,
  dashGreen01,
  dashGreen02,
  dashGreen03,
  dashGreen05,
  transparent
} from '@colors';
import { ButtonThemeConfig } from '@ions/button/themes/types';
import { Props as ButtonProps } from '@atoms/button/Button';
import BaseButton from '@ions/button/base/BaseButton';
import { ThemeColors } from '@ions/theme/types';
import { ThemeWrapper } from '@ions/theme/ThemeWrapper';

const secondaryColors: ThemeColors<ButtonThemeConfig> = {
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

const ButtonSecondary = ThemeWrapper<ButtonProps, ButtonThemeConfig>(
  BaseButton,
  secondaryColors
);

export default ButtonSecondary;
