import * as React from 'react';
import DropdownCard from '@ions/dropdown/card/DropdownCard';
import DropdownElement from '@ions/dropdown/element/DropdownElement';
import styled from 'styled-components';
import {
  DockingSide,
  DropdownElementInfo,
  OnClickFunction,
  Placement
} from './types';
import { useOnClickOutside } from '@utility/withClickOutside';
import { isDropdownOutOfContainer } from './helpers';
import {
  getContainerBoundaries,
  getElementDimensions,
  getElementPlacement
} from '@utility/positionCompute';

interface Props {
  elements: DropdownElementInfo[];
  menuMaxHeight?: number;
  dockingSide?: DockingSide;
  placement?: Placement;
  containerRef?: React.RefObject<HTMLElement>;
}

const DropdownMenuWrapper = styled.div<{ height: number }>`
  position: relative;
  padding: 4px;
  height: ${props => props.height}px;
`;

const MenuWrapper = styled.div<{
  dockingSide?: DockingSide;
  placement: Placement | null;
}>`
  position: absolute;
  opacity: ${props => {
    return props.placement ? 1 : 0;
  }};
  ${props => props.dockingSide || 'left'}: 0;
  ${props => (props.placement === 'top' ? 'bottom' : 'top')}: 100%;
  max-width: 318px;
`;

const DEFAULT_PLACEMENT = 'bottom';
const POSSIBLE_PLACEMENTS: Placement[] = ['top', 'bottom'];

const DropdownMenu: React.FC<Props> = props => {
  const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false);
  const [childHeight, setChildHeight] = React.useState(0);

  const [placement, setPlacement] = React.useState<Placement | null>(null);

  const buttonRef = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      setChildHeight(buttonRef.current.clientHeight);
    }
  }, [buttonRef]);

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
  }, [dropdownIsOpen]);

  useOnClickOutside(dropdownRef, e => {
    e.preventDefault();
    setDropdownIsOpen(false);
  });

  const onChildClick: OnClickFunction = e => {
    e.preventDefault();
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const getChild = () => {
    let child;
    try {
      React.Children.only(props.children);

      child = React.Children.map(props.children, child => {
        if (!React.isValidElement(child)) {
          throw Error;
        }
        return React.cloneElement(child, {
          onClick: onChildClick
        });
      });
    } catch {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          'DropdownMenu must have one child that is a React element'
        );
      }
    }

    return child;
  };

  const getElementOnClick = (onClick: OnClickFunction): OnClickFunction => {
    return e => {
      setDropdownIsOpen(false);
      onClick(e);
    };
  };

  return (
    <DropdownMenuWrapper height={childHeight} ref={dropdownRef}>
      <div ref={buttonRef}>{getChild()}</div>

      {dropdownIsOpen && (
        <MenuWrapper
          dockingSide={props.dockingSide}
          placement={placement}
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
    </DropdownMenuWrapper>
  );
};

export default DropdownMenu;
