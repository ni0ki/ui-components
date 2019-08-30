import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { $light, $transparent } from '@globals/colors';
import { Text } from '@ions';
import { BaseButtonProps } from '@atoms/button/types';

type Theme = {
  [key in keyof DefaultTheme]: string;
};

export interface BaseProps extends BaseButtonProps {
  children?: React.ReactNode;
  theme: Theme;
}

const getActiveColor = ({ theme }: BaseProps): string => theme.activeBackground;

const Button = styled.button<BaseProps>`
  color: ${({ theme }): string => theme.color || $light[100]};
  background-color: ${({ theme }): string => theme.background};
  opacity: ${({ disabled }): number => (disabled ? 0.2 : 1)}
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')}
  border: 1px solid ${$transparent};
  transition: all 0.2s ease-in;
  border-radius: 4px;  
  line-height: 1.75;
  padding: 6px 16px;
  min-width: 64px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: 0;
  &:hover, &:active {
    border: 1px solid ${({ theme }): string => theme.hoverBorder}
  }
  &:active {
    background-color: ${getActiveColor};
    border-color: ${getActiveColor}
    color: ${({ theme }): string =>
      theme.color !== $light[700] ? $light[100] : theme.color};
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
    <Text>{children || 'Default'}</Text>
  </Button>
);

export default BaseButton;
