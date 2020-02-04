import * as React from 'react';
import { functionalRed00, functionalRed01, functionalRed02 } from '@colors';
import { Props as ButtonProps } from '@atoms/button/Button';
import { ButtonThemeConfig } from '@ions/button/themes/types';
import BaseButton from '@ions/button/base/BaseButton';
import { ThemeColors } from '@ions/theme/types';
import { ThemeWrapper } from '@ions/theme/ThemeWrapper';

const dangerColors: ThemeColors<ButtonThemeConfig> = {
  default: {
    backgroundColor: {
      idle: functionalRed02,
      hover: functionalRed01,
      active: functionalRed00
    }
  }
};

const ButtonDanger = ThemeWrapper<ButtonProps, ButtonThemeConfig>(
  BaseButton,
  dangerColors
);

export default ButtonDanger;
