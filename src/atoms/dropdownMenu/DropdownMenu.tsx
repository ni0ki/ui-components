import * as React from 'react';
import DropdownCard from '@ions/dropdown/card/DropdownCard';
import DropdownElement from '@ions/dropdown/element/DropdownElement';
import styled from 'styled-components';
import {
  DockingSide,
  DropdownElementInfo,
  OnClickFunction,
  Placement,
  Position
} from './types';
import { useOnClickOutside } from '@utility/withClickOutside';
import { isDropdownOutOfContainer, getDropdownPosition } from './helpers';
import {
  getContainerBoundaries,
  getElementDimensions,
  getElementPlacement
} from '@utility/positionCompute';

interface Props {
  isOpen: boolean;
  elements: DropdownElementInfo[];
  menuMaxHeight?: number;
  dockingSide?: DockingSide;
  placement?: Placement;
  containerRef?: React.RefObject<HTMLElement>;
  buttonRef?: React.RefObject<HTMLElement>;
}

const MenuWrapper = styled.div<{
  dockingSide?: DockingSide;
  position: Position;
  placement: Placement;
}>`
  position: absolute;
  ${props => props.placement}: ${props => props.position.y}px;
  left: ${props => props.position.x}px;
  max-width: 318px;
`;

const DEFAULT_PLACEMENT = 'bottom';
const POSSIBLE_PLACEMENTS: Placement[] = ['top', 'bottom'];

const DropdownMenu: React.FC<Props> = (props: Props) => {
  const [placement, setPlacement] = React.useState<Placement | null>(null);
  const [position, setPosition] = React.useState<Position>({
    y: 0,
    x: 0
  });

  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const elt = props.buttonRef && props.buttonRef.current;

    if (elt) {
      const eltPosition = {
        top: elt.clientTop,
        left: elt.clientLeft,
        width: elt.clientWidth,
        height: elt.clientHeight
      };
      const newPosition = getDropdownPosition(
        eltPosition,
        props.dockingSide || 'left'
      );
      console.log(newPosition);
      setPosition(newPosition);
    }
  }, [placement]);

  React.useEffect(() => {
    if (!menuRef.current) {
      return;
    }
    const elementDimensions = getElementDimensions(menuRef);

    const containerElement =
      (props.containerRef && props.containerRef.current) || window;
    const containerDimensions = getContainerBoundaries(containerElement);

    try {
      const newPlacement = getElementPlacement(
        isDropdownOutOfContainer,
        placement || props.placement || DEFAULT_PLACEMENT,
        POSSIBLE_PLACEMENTS,
        elementDimensions,
        containerDimensions
      );
      setPlacement(newPlacement);
    } catch (e) {
      console.error(e);
    }
  });

  const getElementOnClick = (onClick: OnClickFunction): OnClickFunction => {
    return e => {
      onClick(e);
    };
  };

  return (
    <>
      {props.isOpen && (
        <MenuWrapper
          dockingSide={props.dockingSide}
          position={position}
          placement={placement || DEFAULT_PLACEMENT}
          ref={menuRef}
        >
          <DropdownCard maxHeight={props.menuMaxHeight}>
            {props.elements.map((element, key) => (
              <DropdownElement
                text={element.title}
                icon={element.icon}
                key={key}
                onClick={getElementOnClick(element.onClick)}
              />
            ))}
          </DropdownCard>
        </MenuWrapper>
      )}
    </>
  );
};

export default DropdownMenu;
