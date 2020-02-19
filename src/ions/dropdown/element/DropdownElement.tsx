import * as React from 'react';
import { StyledText } from '@ions/text/StyledText';
import styled from 'styled-components';
import { dashGreen00, dashGreen06 } from '@colors';

interface Props {
  text: string;
  icon?: JSX.Element;
  onClick: (e: React.MouseEvent) => void;
}

const Text = styled(StyledText)`
  color: ${dashGreen00};
  line-height: 20px;
  font-size: 16px;
`;

const Wrapper = styled.button`
  cursor: pointer;
  border: transparent 0px;
  outline: none;
  display: flex;
  box-sizing: border-box;
  height: 36px;
  flex-shrink: 0;
  padding: 8px 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${dashGreen06};
  }
`;

const IconContainer = styled.div`
  fill: ${dashGreen00};
  margin-right: 8px;
`;

const DropdownElement: React.FC<Props> = props => {
  return (
    <Wrapper type='button' onClick={props.onClick}>
      {props.icon && <IconContainer>{props.icon}</IconContainer>}
      <Text>{props.text}</Text>
    </Wrapper>
  );
};

export default DropdownElement;
