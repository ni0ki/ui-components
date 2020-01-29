import * as React from 'react';
import Icon from '@ions/icon/base/Icon';
import { Props } from '@ions/icon/types';

const isAnimatedSvg = (children: React.ReactElement[]) =>
  !!Array.from<React.ReactElement>(children).find(
    child => child.type === 'animateTransform'
  );
const SvgWrapper: React.FunctionComponent<Props> = ({
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

export default SvgWrapper;
