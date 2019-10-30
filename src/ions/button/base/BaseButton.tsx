import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { $light, $transparent } from '@colors';
import { StyledText } from '@ions/text/StyledText';
import { Props } from '@atoms/button/Button';

export type BaseButtonProps = Omit<Props, 'nature' | 'variant'>;

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
const getBgColor = ({ disabled, theme }: BaseProps) =>
  disabled ? theme.disabled.background : theme.background;
const getColor = ({ disabled, theme }: BaseProps) =>
  disabled ? theme.disabled.color : theme.color;

const Button = styled.button<BaseProps>`
  height: ${({ large = false }) => (large ? '48px' : '32px')};
  color: ${getColor || $light[100]};
  background-color: ${getBgColor};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  border: solid ${$transparent};
  border-width: ${({ theme }) => (theme.active.border ? '2px' : '1px')};
  border-radius: 4px;
  line-height: 1.75;
  padding: ${({ large = false }) => (large ? '0 24px' : '0 16px')};
  min-width: 64px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: 0;
  &:hover {
    color: ${getHoverColor};
    border-color: ${getHoverBorderColor};
    background-color: ${getHoverBackground};
    transition: border-color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  &:active {
    color: ${getActiveColor};
    border-color: ${getActiveBorderColor};
    background-color: ${getActiveBackground};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }

  &:disabled {
    span {
      pointer-events: none;
    }
    &:hover {
      border-color: ${$transparent};
    }
  }
`;

const BaseButton: React.FunctionComponent<BaseProps> = ({
  children,
  ...props
}: BaseProps) => (
  <Button {...props}>
    <StyledText large={props.large}>{children || 'Default'}</StyledText>
  </Button>
);

export default BaseButton;
