import { BasicColor, ColorExclude } from '@typings/Color.d';
import * as colors from '@design-tokens/colors.json';

export const $primary: ColorExclude<'200' | '400'> = colors.primary;

export const $secondary: BasicColor = colors.secondary;

export const $success: BasicColor = colors.success;

export const $danger: BasicColor = colors.danger;

export const $warning: BasicColor = colors.warning;

export const $info: BasicColor = colors.info;

export const $light: ColorExclude<'800'> = colors.light;

export const $transparent = 'transparent';
