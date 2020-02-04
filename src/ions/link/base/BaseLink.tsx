import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps
} from 'styled-components';
import * as React from 'react';
import { Props as LinkProps } from '@atoms/link/Link';
import { dashGreen00 } from '@colors';
import { State as LinkState, Theme } from '@ions/theme/types';
import { assertUnreachable } from '@utility/helpers';

export interface BaseProps extends Omit<LinkProps, 'theme'> {
  theme: Theme;
  customStyle?: FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>;
}

const getColorByState = (state: LinkState = 'idle') => ({ theme }: BaseProps) =>
  (typeof theme.textColor === 'object' && theme.textColor[state]) ||
  dashGreen00;

const RegularLink = styled.a`
  color: ${getColorByState()};
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  outline: none;
  transition: all 0.1s;
  text-decoration: underline;
  ${(props: BaseProps) => props.customStyle};
  &:hover,
  &:focus {
    color: ${getColorByState('hover')};
  }
  &:active {
    color: ${getColorByState('active')};
  }
  ${(props: BaseProps) =>
    props.disabled &&
    `
      opacity: 0.6;
      pointer-events: none;
    `}
`;

const SmallLink = styled(RegularLink)`
  font-size: 12px;
  line-height: 16px;
`;

const BaseLink: React.FunctionComponent<BaseProps> = ({
  size = 'medium',
  ...props
}: BaseProps) => {
  switch (size) {
    case 'small':
      return <SmallLink {...props} />;
    case 'medium':
    case 'large':
      return <RegularLink {...props} />;
    default:
      return assertUnreachable(size);
  }
};

export default BaseLink;
