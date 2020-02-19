import * as React from 'react';
import DropdownCard from '@ions/dropdown/card/DropdownCard';
import DropdownElement from '@ions/dropdown/element/DropdownElement';
import styled from 'styled-components';
import { DropdownElementInfo, OnClickFunction } from './types';
import { useOnClickOutside } from '@utility/withClickOutside';

interface Props {
  elements: DropdownElementInfo[];
  menuMaxHeight?: number;
  dockingSide?: 'left' | 'right';
  placement?: 'top' | 'bottom';
}

const DropdownMenuWrapper = styled.div<{ height: number }>`
  position: relative;
  padding: 4px;
  height: ${props => props.height}px;
`;

const MenuWrapper = styled.div<{
  dockingSide?: 'left' | 'right';
  placement?: 'top' | 'bottom';
}>`
  position: absolute;
  display: block;
  ${props => props.dockingSide || 'left'}: 0;
  ${props => (props.placement === 'top' ? 'bottom' : 'top')}: 100%;
  max-width: 318px;
`;

const DropdownMenu: React.FC<Props> = props => {
  const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      setHeight(buttonRef.current.clientHeight);
    }
  }, [buttonRef]);

  useOnClickOutside(containerRef, e => {
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
    <DropdownMenuWrapper height={height} ref={containerRef}>
      <div ref={buttonRef}>{getChild()}</div>

      {dropdownIsOpen && (
        <MenuWrapper
          dockingSide={props.dockingSide}
          placement={props.placement}
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
