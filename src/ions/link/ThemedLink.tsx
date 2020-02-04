import * as React from 'react';
import {
  dashDarkerGreen00,
  dashGreen00,
  midGreen00,
  midGreen02,
  white
} from '@colors';
import { LinkThemeConfig } from '@ions/link/types';
import { Props as LinkProps } from '@atoms/link/Link';
import { ThemeWrapper } from '@ions/theme/ThemeWrapper';
import { ThemeColors } from '@ions/theme/types';
import BaseLink from '@ions/link/base/BaseLink';

const primaryColors: ThemeColors<LinkThemeConfig> = {
  default: {
    textColor: {
      idle: midGreen00,
      hover: dashGreen00,
      active: dashDarkerGreen00
    }
  },
  dark: {
    textColor: {
      idle: white,
      hover: midGreen02,
      active: midGreen00
    }
  }
};

const ThemedLink = ThemeWrapper<LinkProps, LinkThemeConfig>(
  BaseLink,
  primaryColors
);

export default ThemedLink;
