import * as React from 'react';
import DropdownMenu from '@atoms/dropdownMenu/DropdownMenu';
import { Button } from '@atoms';
import styled from 'styled-components';

interface Props {
  icon: JSX.Element;
  maxMenuHeight?: number;
  containerRef?: React.RefObject<HTMLElement>;
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
  const [isOpen, setIsOpen] = React.useState(false);
  const controllerRef = React.useRef<HTMLDivElement>(null);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div ref={controllerRef}>
        <SquareButton nature='ghost' onClick={onButtonClick}>
          {props.icon}
        </SquareButton>
      </div>
      <DropdownMenu
        dockingSide='right'
        menuMaxHeight={props.maxMenuHeight}
        isOpen={isOpen}
        controllerRef={controllerRef}
        containerRef={props.containerRef}
      >
        {props.children}
      </DropdownMenu>
    </Wrapper>
  );
};

export default QuickActionsMenu;
