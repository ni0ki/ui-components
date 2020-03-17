import * as React from 'react';
import DropdownMenu from '@atoms/dropdownMenu/DropdownMenu';
import { Button, Tooltip } from '@atoms';
import styled from 'styled-components';
import { dashGreen00 } from '@colors';

interface Props {
  isOpen: boolean;
  icon: JSX.Element;
  onClick: React.MouseEventHandler;
  tooltipTitle: string;
  maxMenuHeight?: number;
  containerRef?: React.RefObject<HTMLElement>;
  isDisabled?: boolean;
  menuClassName?: string;
}

const SquareButton = styled(Button)`
  width: 32px;
  height: 32px;
  fill: ${dashGreen00};
`;

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

const QuickActionsMenu: React.FC<Props> = props => {
  const controllerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <div ref={controllerRef}>
        <Tooltip
          placement='left'
          title={props.tooltipTitle}
          options={{ tooltipMaxWidth: 172 }}
        >
          <SquareButton
            nature='ghost'
            onClick={props.onClick}
            disabled={props.isDisabled}
          >
            {props.icon}
          </SquareButton>
        </Tooltip>
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
