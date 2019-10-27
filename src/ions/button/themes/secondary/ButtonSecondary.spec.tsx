import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonSecondary from './ButtonSecondary';
import { $light, $secondary } from '@colors';

describe('<ButtonSecondary>', () => {
  describe('global render', () => {
    it('should render', () => {
      const ContainedButtonSecondary = mount(<ButtonSecondary />);
      const TextButtonSecondary = mount(<ButtonSecondary variant='text' />);

      expect(ContainedButtonSecondary).toMatchSnapshot();
      expect(TextButtonSecondary).toMatchSnapshot();
    });

    describe('Secondary style', () => {
      it('should have the correct style for contained buttons ', () => {
        const ContainedButtonSecondary = mount(<ButtonSecondary />);
        const button = ContainedButtonSecondary.find('button');

        expect(button).toHaveStyleRule('color', $light[100]);
        expect(button).toHaveStyleRule('background-color', $secondary[500]);
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonSecondary = mount(<ButtonSecondary variant='text' />);
        const button = TextButtonSecondary.find('button');

        expect(button).toHaveStyleRule('color', $secondary[500]);
        expect(button).toHaveStyleRule('background-color', 'transparent');
      });
    });
  });
});
