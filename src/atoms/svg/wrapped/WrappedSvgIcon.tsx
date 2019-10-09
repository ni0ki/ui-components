import * as React from 'react';
import styled from 'styled-components';
import { ButtonLight } from '@ions';
import { SvgIcon } from '@atoms';
import { ButtonVariant } from '@atoms/button/Button';

interface Props {
  name: string;
  size?: number;
  disabled?: boolean;
}

const IconWrapper = styled(ButtonLight)`
  min-width: 0;
  padding: 6px;
  height: 100%;
`;

const WrappedSvgIcon: React.FunctionComponent<Props> = ({
  name,
  size,
  ...props
}: Props): JSX.Element => (
  <IconWrapper variant={ButtonVariant.text} {...props}>
    <SvgIcon name={name} size={size} />
  </IconWrapper>
);

export default WrappedSvgIcon;
