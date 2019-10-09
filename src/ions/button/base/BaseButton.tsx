import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { $light, $transparent } from '@globals/colors';
import { Text } from '@ions';
import { BaseButtonProps } from '@atoms/button/Button';

type Theme = {
  [key in keyof DefaultTheme]: DefaultTheme[key];
};

export interface BaseProps extends BaseButtonProps {
  children?: React.ReactNode;
  theme: Theme;
}

const getActiveBackground = ({ theme }: BaseProps): string =>
  theme.active.background;
const getActiveColor = ({ theme }: BaseProps): string =>
  theme.active.color || theme.color;
const getActiveBorderColor = ({ theme }: BaseProps): string =>
  theme.active.border || $transparent;
const getHoverBackground = ({ theme }: BaseProps): string =>
  theme.hover.background;
const getHoverColor = ({ theme }: BaseProps): string => theme.color;
const getHoverBorderColor = ({ theme }: BaseProps): string =>
  theme.hover.border || $transparent;

const Button = styled.button<BaseProps>`
  color: ${({ theme }): string => theme.color || $light[100]};
  background-color: ${({ theme }): string => theme.background};
  opacity: ${({ disabled }): number => (disabled ? 0.5 : 1)}
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')}
  border: 1px solid ${$transparent};
  transition: background-color .1s ease-in;
  border-radius: 4px;  
  line-height: 1.75;
  padding: ${({ large = false }) => (large ? '12px 24px' : '6px 16px')};
  min-width: 64px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: 0;
  &:hover{
    color: ${getHoverColor};
    border-color: ${getHoverBorderColor};
    background-color: ${getHoverBackground};
  }
  &:active {
   color: ${getActiveColor};
    border-color: ${getActiveBorderColor};
    background-color: ${getActiveBackground};
  }
  &:disabled span {
    pointer-events: none;
  }
`;

const BaseButton: React.FunctionComponent<BaseProps> = ({
  children,
  ...props
}: BaseProps) => (
  <Button {...props}>
    <Text large={props.large}>{children || 'Default'}</Text>
  </Button>
);

export default BaseButton;
