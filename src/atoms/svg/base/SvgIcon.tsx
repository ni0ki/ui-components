import * as React from 'react';
import Icon from '@ions/icon/Icon';

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
   * The icon size
   * @default 2em
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

const isAnimatedSvg = (children: React.ReactElement[]) =>
  !!Array.from<React.ReactElement>(children).find(
    child => child.type === 'animateTransform'
  );
const SvgIcon: React.FunctionComponent<Props> = ({
  title,
  children,
  ...props
}: Props): JSX.Element => {
  const isAnimated =
    children.props && children.props.children
      ? isAnimatedSvg(children.props.children)
      : false;
  return (
    <Icon animated={isAnimated} {...props}>
      {title ? <title>{title}</title> : null}
      {children}
    </Icon>
  );
};

export default SvgIcon;
