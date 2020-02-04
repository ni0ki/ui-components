import * as React from 'react';
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps
} from 'styled-components';
import { transparent, white } from '@colors';
import { StyledText } from '@ions/text/StyledText';
import { Props } from '@atoms/button/Button';
import { assertUnreachable } from '@utility/helpers';
import { State as ButtonState, Theme } from '@ions/theme/types';

export type BaseButtonProps = Omit<Props, 'nature' | 'theme'>;

export interface BaseProps extends BaseButtonProps {
  children?: React.ReactNode;
  customStyle?: FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>;
  theme: Theme;
}

const getBgColorByState = (state: ButtonState) => ({ theme }: BaseProps) =>
  (theme.backgroundColor && theme.backgroundColor[state]) || transparent;
const getColor = ({ theme }: BaseProps) =>
  (typeof theme.textColor === 'string' && theme.textColor) || white;
const getBorderByState = (state: ButtonState) => ({ theme }: BaseProps) =>
  theme.borderColor
    ? `1px solid ${theme.borderColor[state] || transparent}`
    : 'none';

const baseStyle = css`
  color: ${getColor};
  font-size: 16px;
  line-height: 20px;
  background-color: ${getBgColorByState('idle')};
  cursor: pointer;
  border: ${getBorderByState('idle')};
  border-radius: 4px;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: all 0.1s;
  ${(props: BaseProps) => props.customStyle};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border: ${getBorderByState('hover')};
    background-color: ${getBgColorByState('hover')};
  }
  &:active:not(:disabled) {
    border: ${getBorderByState('active')};
    background-color: ${getBgColorByState('active')};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    span {
      pointer-events: none;
    }
  }
`;

const SmallButton = styled.button<BaseProps>`
  ${baseStyle}
  padding: 8px 16px;
  height: 32px;
  font-size: 12px;
  line-height: 16px;
`;

const MediumButton = styled.button<BaseProps>`
  ${baseStyle}
  padding: 10px 16px;
  height: 40px;
`;

const LargeButton = styled.button<BaseProps>`
  ${baseStyle}
  padding: 14px 24px;
  height: 48px;
`;

const StyledContent = styled(StyledText)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BaseButton: React.FunctionComponent<BaseProps> = ({
  children,
  size = 'medium',
  ...props
}: BaseProps) => {
  const content = <StyledContent>{children || 'Default'}</StyledContent>;
  switch (size) {
    case 'small':
      return <SmallButton {...props}>{content}</SmallButton>;
    case 'medium':
      return <MediumButton {...props}>{content}</MediumButton>;
    case 'large':
      return <LargeButton {...props}>{content}</LargeButton>;
    default:
      return assertUnreachable(size);
  }
};

export default BaseButton;
