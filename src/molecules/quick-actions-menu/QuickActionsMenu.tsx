import * as React from 'react';
import DropdownMenu from '@atoms/dropdownMenu/DropdownMenu';
import { Button } from '@atoms';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  icon: JSX.Element;
  setIsOpen: (isOpen: boolean) => void;
  maxMenuHeight?: number;
  containerRef?: React.RefObject<HTMLElement>;
  isDisabled?: boolean;
  menuClassName?: string;
}

const SquareButton = styled(Button)`
  width: 32px;
  height: 32px;
`;

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

const QuickActionsMenu: React.FC<Props> = props => {
  const controllerRef = React.useRef<HTMLDivElement>(null);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setIsOpen(!props.isOpen);
  };

  return (
    <Wrapper>
      <div ref={controllerRef}>
        <SquareButton
          nature='ghost'
          onClick={onButtonClick}
          disabled={props.isDisabled}
        >
          {props.icon}
        </SquareButton>
      </div>
      <DropdownMenu
        dockingSide='right'
        menuMaxHeight={props.maxMenuHeight}
        isOpen={props.isOpen}
        controllerRef={controllerRef}
        containerRef={props.containerRef}
        menuClassName={props.menuClassName}
      >
        {props.children}
      </DropdownMenu>
    </Wrapper>
  );
};

export default QuickActionsMenu;
