import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { BaseButton } from '@ions';
import { $transparent } from '@globals/colors';
import { BaseButtonProps, ButtonVariant } from '@atoms/button/types';

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
    color: textSecondary || bgPrimary,
    hoverBorder: bgPrimary,
    activeBackground: bgSecondary
  };

  const flatTheme: DefaultTheme = {
    background: bgPrimary,
    color: textPrimary,
    hoverBorder: bgSecondary,
    activeBackground: bgSecondary
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
