import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { BaseButton } from '@ions';
import { $borderFade, $transparent } from '@globals/colors';
import { BaseButtonProps, ButtonVariant } from '@atoms/button/Button';

export interface ThemeColors {
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary?: string;
  };
}

export const WithTheme = ({ background, text }: ThemeColors) => {
  const { primary: bgPrimary, secondary: bgSecondary } = background;
  const { primary: textPrimary, secondary: textSecondary } = text;

  const transparentTheme: DefaultTheme = {
    background: $transparent,
    color: textSecondary || textPrimary,
    hover: {
      border: bgPrimary,
      background: $transparent
    },
    active: {
      color: textPrimary,
      background: bgPrimary
    }
  };

  const flatTheme: DefaultTheme = {
    background: bgPrimary,
    color: textPrimary,
    hover: {
      background: bgSecondary
    },
    active: {
      border: $borderFade,
      background: bgSecondary
    }
  };

  const WrappedButton = ({
    variant = ButtonVariant.contained,
    ...props
  }: BaseButtonProps) => {
    const theme = variant === ButtonVariant.text ? transparentTheme : flatTheme;
    return <BaseButton {...props} theme={theme} />;
  };
  return WrappedButton;
};
