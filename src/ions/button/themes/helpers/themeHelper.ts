import { DefaultTheme } from 'styled-components';
import { $transparent } from '@colors';
import { ButtonVariant } from '@atoms/button/types';
import { assertUnreachable } from '@utility/helpers';
import { ThemeColors } from '@ions/button/themes/helpers/ThemedButton';

export const getThemeByVariant = (
  colors: ThemeColors,
  variant: ButtonVariant = 'contained'
): DefaultTheme => {
  const { background, text, border } = colors;
  const {
    primary: bgPrimary,
    secondary: bgSecondary,
    tertiary: bgTertiary
  } = background;
  const { primary: textPrimary, secondary: textSecondary } = text;
  const {
    primary: borderPrimary,
    secondary: borderSecondary,
    tertiary: borderTertiary
  } = border;

  switch (variant) {
    case 'text':
      return {
        background: $transparent,
        color: textSecondary || textPrimary,
        hover: {
          border: borderSecondary,
          background: $transparent
        },
        active: {
          color: textPrimary,
          background: bgPrimary
        },
        disabled: {
          color: borderTertiary || bgTertiary
        }
      };
    case 'contained':
      return {
        background: bgPrimary,
        color: textPrimary,
        hover: {
          background: bgSecondary
        },
        active: {
          border: borderPrimary,
          background: bgSecondary
        },
        disabled: {
          color: borderTertiary || textPrimary,
          background: bgTertiary
        }
      };

    default:
      return assertUnreachable(variant);
  }
};
