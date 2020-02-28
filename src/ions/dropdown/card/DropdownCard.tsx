import styled from 'styled-components';
import { dashGreen04, white } from '@colors';

interface Props {
  maxHeight?: number;
}

const DropdownCard = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border: 1px solid ${dashGreen04};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px 0;
  max-height: ${props => props.maxHeight || 100}px;
  overflow-y: scroll;
`;

export default DropdownCard;
