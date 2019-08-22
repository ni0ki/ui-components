import * as React from 'react';
import styled from 'styled-components';
import BaseButton from '@ions/base';

interface Props {
  title: string;
  border?: string;
  className: string;
}

const StyledButton = ({ title, className, ...props }: Props): JSX.Element => (
  <BaseButton className={className} {...props}>
    {title}
  </BaseButton>
);

const HoveredButton = styled(StyledButton)`
  &:hover {
    background: ${({ theme }): string => theme.hoverBackground};
  }
`;

export default HoveredButton;
