import * as React from 'react';
import styled from 'styled-components';
import { ButtonLight } from '@ions';
import { ButtonVariant } from '@atoms/button/types';
import { SvgIcon } from '@atoms';

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
  disabled
}: Props): JSX.Element => (
  <IconWrapper variant={ButtonVariant.text} disabled={disabled}>
    <SvgIcon name={name} size={size} />
  </IconWrapper>
);

export default WrappedSvgIcon;
