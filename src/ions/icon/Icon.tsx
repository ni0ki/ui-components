import styled from 'styled-components';
import { $light } from '@globals/colors';

type ColorTypes = 'color' | 'hoverColor' | 'activeColor';
type ColorProps = {
  [color in ColorTypes]?: string;
};

export interface Props extends ColorProps {
  size?: number;
  disabled?: boolean;
}

const getSize = ({ size = 2 }) => `${size}em`;
const getColor = (propName: ColorTypes) => (props: Props): string =>
  props[propName] || $light[700];

const Icon = styled.svg<Props>`
  display: flex;
  width: ${getSize};
  height: ${getSize};
  stroke-width: 0;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')}
  outline: none;
  border-radius: 4px;
  fill: ${getColor('color')};
  opacity: ${({ disabled }): number => (disabled ? 0.5 : 1)}
  transition: all 0.1s ease-in;
  &:hover {
    fill: ${getColor('hoverColor')};
  }
  &:active {
    fill: ${getColor('activeColor')};
  }
`;

export default Icon;
