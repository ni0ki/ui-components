import * as React from 'react';
import {
  DropdownElementInfo,
  OnClickFunction
} from '@atoms/dropdownMenu/types';
import DropdownMenu from '@atoms/dropdownMenu/DropdownMenu';
import { Button, MoreIcon } from '@atoms';
import styled from 'styled-components';

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

const QuickActionsMenu: React.FC<Props> = props => {
  return (
    <DropdownMenu
      elements={props.elements}
      dockingSide='right'
      menuMaxHeight={props.maxMenuHeight}
    >
      <SquareButton nature='ghost'>
        <MoreIcon />
      </SquareButton>
    </DropdownMenu>
  );
};

export default QuickActionsMenu;
