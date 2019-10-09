export interface Color {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}
export type ColorExclude<T extends string> = Omit<Color, T>;
export type BasicColor = ColorExclude<
  '100' | '200' | '400' | '600' | '800' | '900'
>;
