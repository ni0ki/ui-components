import * as React from 'react';
import {
  dashDarkerGreen00,
  dashGreen00,
  midGreen00,
  midGreen01,
  midGreen03,
  white
} from '@colors';
import { ButtonThemeConfig } from '@ions/button/themes/types';
import { Props as ButtonProps } from '@atoms/button/Button';
import BaseButton from '@ions/button/base/BaseButton';
import { ThemeColors } from '@ions/theme/types';
import { ThemeWrapper } from '@ions/theme/ThemeWrapper';

const primaryColors: ThemeColors<ButtonThemeConfig> = {
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

const ButtonPrimary = ThemeWrapper<ButtonProps, ButtonThemeConfig>(
  BaseButton,
  primaryColors
);

export default ButtonPrimary;
