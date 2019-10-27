import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonLight from './ButtonLight';
import { $light } from '@colors';

describe('<ButtonLight>', () => {
  describe('global render', () => {
    it('should render', () => {
      const ContainedButtonLight = mount(<ButtonLight />);
      const TextButtonLight = mount(<ButtonLight variant='text' />);

      expect(ContainedButtonLight).toMatchSnapshot();
      expect(TextButtonLight).toMatchSnapshot();
    });

    describe('Light style', () => {
      it('should have the correct style for contained buttons ', () => {
        const ContainedButtonLight = mount(<ButtonLight />);
        const button = ContainedButtonLight.find('button');

        expect(button).toHaveStyleRule('color', $light[700]);
        expect(button).toHaveStyleRule('background-color', $light[300]);
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonLight = mount(<ButtonLight variant='text' />);
        const button = TextButtonLight.find('button');

        expect(button).toHaveStyleRule('color', $light[700]);
        expect(button).toHaveStyleRule('background-color', 'transparent');
      });
    });
  });
});
