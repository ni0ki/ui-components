import * as React from 'react';
import { mount } from 'enzyme';
import DropdownMenu from './DropdownMenu';
import DropdownElement from '@ions/dropdown/element/DropdownElement';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render', () => {
      const controllerRef = React.createRef<HTMLDivElement>();

      const DropdownMenuWrapper = mount(
        <div>
          <div ref={controllerRef}>Dropdwon Menu controller</div>
          <DropdownMenu controllerRef={controllerRef} isOpen={true}>
            <DropdownElement onClick={() => {}}>Element 1</DropdownElement>
            <DropdownElement onClick={() => {}}>Element 2</DropdownElement>
          </DropdownMenu>
        </div>
      );

      expect(DropdownMenuWrapper).toMatchSnapshot();
    });
  });
});
