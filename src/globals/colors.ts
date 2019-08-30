import { BasicColor, ColorExclude } from '@globals/Color.d';

export const $primary: ColorExclude<200 | 400> = {
  100: '#cce5ea',
  300: '#8cc4d0',
  500: '#007c97',
  600: '#005d71',
  700: '#003945',
  800: '#002e38',
  900: '#062931'
};

export const $secondary: BasicColor = {
  300: '#ffc1a3',
  500: '#ff5412',
  700: '#b34015'
};

export const $success: BasicColor = {
  300: '#c1eac1',
  500: '#20b422',
  700: '#157917'
};

export const $danger: BasicColor = {
  300: '#ffe3dd',
  500: '#ff002d',
  700: '#8b0018'
};

export const $warning: BasicColor = {
  300: '#fffac1',
  500: '#ffe900',
  700: '#595200'
};

export const $info: BasicColor = {
  300: '#00b8ff',
  500: '#007dad',
  700: '#00e042'
};

export const $light: ColorExclude<800> = {
  100: '#ffffff',
  200: '#fafafa',
  300: '#f6f6f6',
  400: '#e7e7e7',
  500: '#d6d6d6',
  600: '#9b9b9b',
  700: '#474747',
  900: '#191919'
};

export const $transparent = 'transparent';
