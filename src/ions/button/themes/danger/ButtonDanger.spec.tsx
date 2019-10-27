import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonDanger from './ButtonDanger';
import { $danger, $light } from '@colors';

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
        const button = ContainedButtonDanger.find('button');

        expect(button).toHaveStyleRule('color', $light[100]);
        expect(button).toHaveStyleRule('background-color', $danger[500]);
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonDanger = mount(<ButtonDanger variant='text' />);
        const button = TextButtonDanger.find('button');

        expect(button).toHaveStyleRule('color', $danger[500]);
        expect(button).toHaveStyleRule('background-color', 'transparent');
      });
    });
  });
});
