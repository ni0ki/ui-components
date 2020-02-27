import * as React from 'react';
import DropdownCard from '@ions/dropdown/card/DropdownCard';
import styled from 'styled-components';
import { DockingSide, Placement } from './types';
import {
  getControllerAndMenuDimensions,
  getDropdownPosition,
  isDropdownOutOfContainer
} from './helpers';
import {
  getContainerBoundaries,
  getElementPlacement
} from '@utility/positionCompute';

interface Props {
  isOpen: boolean;
  controllerRef: React.RefObject<HTMLElement>;
  menuMaxHeight?: number;
  dockingSide?: DockingSide;
  placement?: Placement;
  containerRef?: React.RefObject<HTMLElement>;
}
export interface MenuWrapperProps {
  placement: Placement;
  dockingSide: DockingSide;
  isReadyForDisplay: boolean;
}

const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  opacity: ${props => (props.isReadyForDisplay ? 1 : 0)};
  ${getDropdownPosition}
  max-width: 318px;
`;

const DEFAULT_PLACEMENT = 'bottom';
const POSSIBLE_PLACEMENTS: Placement[] = ['top', 'bottom'];

const DropdownMenu: React.FC<Props> = props => {
  const [placement, setPlacement] = React.useState<Placement | null>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const prevIsOpen = React.useRef(false);

  React.useEffect(() => {
    if (props.isOpen === prevIsOpen.current) {
      return;
    }
    prevIsOpen.current = props.isOpen;
    setPlacement(null);

    if (!menuRef.current || !props.controllerRef.current) {
      return;
    }
    const elementDimensions = getControllerAndMenuDimensions(
      menuRef,
      props.controllerRef
    );

    const containerElement =
      (props.containerRef && props.containerRef.current) || window;
    const containerDimensions = getContainerBoundaries(containerElement);

    try {
      const newPlacement = getElementPlacement(
        isDropdownOutOfContainer,
        props.placement || DEFAULT_PLACEMENT,
        POSSIBLE_PLACEMENTS,
        elementDimensions,
        containerDimensions
      );
      setPlacement(newPlacement);
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <>
      {props.isOpen && (
        <MenuWrapper
          placement={placement || DEFAULT_PLACEMENT}
          ref={menuRef}
          dockingSide={props.dockingSide || 'left'}
          isReadyForDisplay={placement !== null}
        >
          <DropdownCard maxHeight={props.menuMaxHeight}>
            {props.children}
          </DropdownCard>
        </MenuWrapper>
      )}
    </>
  );
};

export default DropdownMenu;
