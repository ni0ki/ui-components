import * as React from 'react';
import DropdownCard from '@ions/dropdown/card/DropdownCard';
import DropdownElement from '@ions/dropdown/element/DropdownElement';
import styled from 'styled-components';

type OnClickFunction = (e: React.MouseEvent) => void;

interface DropdownElementInfo {
  title: string;
  icon?: JSX.Element;
  onClick: OnClickFunction;
}

interface Props {
  elements: DropdownElementInfo[];
}

const DropdownMenuWrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  /* margin-bottom: 4px; */
`;

const MenuWrapper = styled.div`
  position: absolute;
  display: block;
  left: 0;
  bottom: -4px;
  max-width: 300px;
`;

const DropdownMenu: React.FC<Props> = props => {
  const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false);

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
    <DropdownMenuWrapper>
      <ButtonWrapper>{getChild()}</ButtonWrapper>
      {dropdownIsOpen && (
        <MenuWrapper>
          <DropdownCard>
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
