import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface Props {
  title?: string;
  primary?: boolean;
}

export const BasicButton = styled.button`
  color: white;
  background-color: ${({ primary }: Props) => (primary ? 'pink' : 'purple')};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const Button: FunctionComponent<Props> = ({
  title = 'Nothing will happen!',
  primary = false
}: Props): JSX.Element => <BasicButton primary={primary}>{title}</BasicButton>;

export default Button;
