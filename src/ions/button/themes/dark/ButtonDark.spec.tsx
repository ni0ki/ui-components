import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ButtonDark } from '@ions';
import { $light } from '@globals/colors';

describe('<ButtonDark>', () => {
  describe('global render', () => {
    it('should render', () => {
      const ContainedButtonDark = mount(<ButtonDark />);
      const TextButtonDark = mount(<ButtonDark variant='text' />);

      expect(ContainedButtonDark).toMatchSnapshot();
      expect(TextButtonDark).toMatchSnapshot();
    });

    describe('Dark style', () => {
      it('should have the correct style for contained buttons ', () => {
        const ContainedButtonDark = mount(<ButtonDark />);

        expect(ContainedButtonDark).toHaveStyleRule('color', $light[700]);
        expect(ContainedButtonDark).toHaveStyleRule(
          'background-color',
          $light[400]
        );
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonDark = mount(<ButtonDark variant='text' />);

        expect(TextButtonDark).toHaveStyleRule('color', $light[700]);
        expect(TextButtonDark).toHaveStyleRule(
          'background-color',
          'transparent'
        );
      });
    });
  });
});
