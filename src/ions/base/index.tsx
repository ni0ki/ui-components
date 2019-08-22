import styled from 'styled-components';
import { $gray200, $primary500 } from '@globals/colors';

export interface Props {
  disabled?: boolean;
}

const BaseButton = styled.button<Props>`
  color: ${({ theme }): string => theme.color || $gray200};
  background-color: ${({ theme }): string => theme.background || $primary500};
  opacity: ${({ disabled }): number => (disabled ? 0.3 : 1)}
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')}
  border: 2px solid ${({ theme }): string =>
    theme.border ? theme.border : 'transparent'}
  font-size: 16px;
  line-height: 20px;
  padding: 16px 5px 16px 7px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
`;

export default BaseButton;
