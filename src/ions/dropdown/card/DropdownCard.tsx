import * as React from 'react';
import styled from 'styled-components';
import { dashGreen04, white } from '@colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border: 1px solid ${dashGreen04};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px 0;
`;

const DropdownCard: React.FC = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default DropdownCard;
