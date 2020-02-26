import * as React from 'react';
import { Button, PhoneIcon } from 'index';
import DropdownMenu from './DropdownMenu';

const DropdownDemo: React.FC = () => {
  const [dropdown1IsOpen, setDropdown1IsOpen] = React.useState(false);
  const [dropdown2IsOpen, setDropdown2IsOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const button1Ref = React.useRef(null);
  const button2Ref = React.useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        height: '250px',
        display: 'flex',
        background: 'ghostwhite',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ position: 'relative', height: 'fit-content' }}>
        <div ref={button1Ref}>
          <Button
            nature='primary'
            onClick={() => setDropdown1IsOpen(!dropdown1IsOpen)}
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
          isOpen={dropdown1IsOpen}
          dockingSide='left'
          placement='top'
          containerRef={containerRef}
          controllerRef={button1Ref}
        ></DropdownMenu>
      </div>

      <div
        style={{
          position: 'relative',
          height: 'fit-content',
          alignSelf: 'flex-end'
        }}
      >
        <div ref={button2Ref}>
          <Button
            nature='secondary'
            onClick={() => {
              setDropdown2IsOpen(!dropdown2IsOpen);
            }}
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
          isOpen={dropdown2IsOpen}
          dockingSide='left'
          placement='bottom'
          containerRef={containerRef}
          controllerRef={button2Ref}
        ></DropdownMenu>
      </div>
    </div>
  );
};

export default DropdownDemo;
