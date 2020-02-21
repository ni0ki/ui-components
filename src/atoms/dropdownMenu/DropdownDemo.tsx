import * as React from 'react';
import { Button, PhoneIcon } from 'index';
import DropdownMenu from './DropdownMenu';

const DropdownDemo: React.FC = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={buttonRef}>
        <Button
          nature='primary'
          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
        >
          Click Me
        </Button>
      </div>
      <DropdownMenu
        elements={[
          {
            title: 'Hello',
            icon: <PhoneIcon />,
            onClick: () => {}
          },
          {
            title: 'Holà',
            onClick: () => {}
          },
          {
            title: 'Bonjour',
            onClick: () => {}
          },
          {
            title: 'Gutten Tag',
            onClick: () => {}
          }
        ]}
        buttonRef={buttonRef}
        isOpen={dropdownIsOpen}
        placement='top'
        dockingSide='right'
      ></DropdownMenu>
    </div>
  );
};

export default DropdownDemo;
