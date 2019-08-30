import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ButtonDanger } from '@ions';
import { $danger, $light } from '@globals/colors';

describe('<ButtonDanger>', () => {
  describe('global render', () => {
    it('should render', () => {
      const ContainedButtonDanger = mount(<ButtonDanger />);
      const TextButtonDanger = mount(<ButtonDanger variant='text' />);

      expect(ContainedButtonDanger).toMatchSnapshot();
      expect(TextButtonDanger).toMatchSnapshot();
    });

    describe('Danger style', () => {
      it('should have the correct style for contained buttons ', () => {
        const ContainedButtonDanger = mount(<ButtonDanger />);

        expect(ContainedButtonDanger).toHaveStyleRule('color', $light[100]);
        expect(ContainedButtonDanger).toHaveStyleRule(
          'background-color',
          $danger[500]
        );
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonDanger = mount(<ButtonDanger variant='text' />);

        expect(TextButtonDanger).toHaveStyleRule('color', $danger[500]);
        expect(TextButtonDanger).toHaveStyleRule(
          'background-color',
          'transparent'
        );
      });
    });
  });
});
