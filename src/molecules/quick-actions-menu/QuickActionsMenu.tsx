import * as React from 'react';
import {
  DropdownElementInfo,
  OnClickFunction
} from '@atoms/dropdownMenu/types';
import DropdownMenu from '@atoms/dropdownMenu/DropdownMenu';
import { Button, MoreIcon } from '@atoms';
import styled from 'styled-components';
import DropdownElement from '@ions/dropdown/element/DropdownElement';

interface QuickActionsElement extends DropdownElementInfo {
  title: string;
  icon: JSX.Element;
  onClick: OnClickFunction;
}

interface Props {
  elements: QuickActionsElement[];
  maxMenuHeight?: number;
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

  const getElementOnClick = (element: QuickActionsElement) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setIsOpen(false);
      element.onClick(e);
    };
  };

  return (
    <Wrapper>
      <div ref={controllerRef}>
        <SquareButton nature='ghost' onClick={onButtonClick}>
          <MoreIcon />
        </SquareButton>
      </div>
      <DropdownMenu
        dockingSide='right'
        menuMaxHeight={props.maxMenuHeight}
        isOpen={isOpen}
        controllerRef={controllerRef}
      >
        {props.elements.map((element, key) => {
          return (
            <DropdownElement
              text={element.title}
              icon={element.icon}
              onClick={getElementOnClick(element)}
              key={key}
            />
          );
        })}
      </DropdownMenu>
    </Wrapper>
  );
};

export default QuickActionsMenu;
