import styled from 'styled-components';
import { Props as IconProps } from '@atoms/svg/base/SvgIcon';

export type ColorProps = 'color' | 'hoverColor' | 'activeColor';
interface Props extends Omit<IconProps, 'title' | 'children'> {
  animated?: boolean;
}

const getSize = ({ size = 20 }) => `${size}px`;
const getColor = (propName: ColorProps = 'color') => (props: Props): string =>
  props.animated ? 'none' : props[propName] || props['color'] || 'inherit';

const Icon = styled.svg.attrs<Props>(({ viewBox }: Props) => ({
  viewBox: viewBox || '0 0 20 20',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg'
}))`
  display: flex;
  width: ${getSize};
  height: ${getSize};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  border-radius: 4px;
  fill: ${getColor()};
  opacity: ${({ disabled }): number => (disabled ? 0.5 : 1)};
  transition: ${({ animated }): string =>
    animated ? 'none' : 'all 0.1s ease-in'};
  &:hover {
    fill: ${getColor('hoverColor')};
  }
  &:active {
    fill: ${getColor('activeColor')};
  }
`;

export default Icon;
