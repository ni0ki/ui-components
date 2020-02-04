import * as React from 'react';
import { css } from 'styled-components';
import { dashGreen00, dashGreen01, dashGreen05, transparent } from '@colors';
import { ButtonThemeConfig } from '@ions/button/themes/types';
import { Props as ButtonProps } from '@atoms/button/Button';
import BaseButton from '@ions/button/base/BaseButton';
import { ThemeColors } from '@ions/theme/types';
import { ThemeWrapper } from '@ions/theme/ThemeWrapper';

const primaryColors: ThemeColors<ButtonThemeConfig> = {
  default: {
    backgroundColor: {
      idle: transparent,
      hover: transparent,
      active: dashGreen05
    },
    textColor: dashGreen00,
    borderColor: {
      idle: transparent,
      hover: dashGreen05,
      active: dashGreen05
    }
  },
  dark: {
    backgroundColor: {
      idle: transparent,
      hover: transparent,
      active: dashGreen01
    },
    borderColor: {
      idle: transparent,
      hover: dashGreen01,
      active: dashGreen01
    }
  }
};

/**
 * Ghost button special styling
 */
const ghostStyle = css`
  min-width: 32px;
  svg {
    margin: -8px -16px;
  }
`;

const ButtonGhost = ThemeWrapper<ButtonProps, ButtonThemeConfig>(
  BaseButton,
  primaryColors,
  ghostStyle
);

export default ButtonGhost;
