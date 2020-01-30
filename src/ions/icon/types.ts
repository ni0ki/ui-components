import * as React from 'react';

export interface Props {
  /**
   * The svg content to display
   */
  children: React.ReactElement;
  /**
   * The icon title (displayed on svg hover)
   */
  title?: string;
  /**
   * The icon size in px
   * @default 20px
   */
  size?: number;
  /**
   * A disabled state for the icon wrapper
   * @default false
   */
  disabled?: boolean;
  /**
   * The icon color
   * @default 'inherit' (parent's fill property)
   */
  color?: string;
  /**
   * The icon color when hovered
   * @default  'inherit' (parent's fill property)
   */
  hoverColor?: string;
  /**
   * The icon color when active
   * @default 'inherit' (parent's fill property)
   */
  activeColor?: string;
  /**
   * Allows to redefine the coordinates of the SVG element.
   * @default '0 0 20 20'
   **/
  viewBox?: string;
}

export type IconProps = Pick<Props, Exclude<keyof Props, 'children'>>; // Using this rather than Omit<Props, 'children'> because Docz is not able to understand the Omit syntax and to parse the props
