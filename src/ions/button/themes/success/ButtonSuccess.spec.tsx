import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonSuccess from './ButtonSuccess';
import { $light, $success } from '@colors';

describe('<ButtonSuccess>', () => {
  describe('global render', () => {
    it('should render', () => {
      const ContainedButtonSuccess = mount(<ButtonSuccess />);
      const TextButtonSuccess = mount(<ButtonSuccess variant='text' />);

      expect(ContainedButtonSuccess).toMatchSnapshot();
      expect(TextButtonSuccess).toMatchSnapshot();
    });

    describe('Success style', () => {
      it('should have the correct style for contained buttons ', () => {
        const ContainedButtonSuccess = mount(<ButtonSuccess />);
        const button = ContainedButtonSuccess.find('button');

        expect(button).toHaveStyleRule('color', $light[100]);
        expect(button).toHaveStyleRule('background-color', $success[500]);
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonSuccess = mount(<ButtonSuccess variant='text' />);
        const button = TextButtonSuccess.find('button');

        expect(button).toHaveStyleRule('color', $success[500]);
        expect(button).toHaveStyleRule('background-color', 'transparent');
      });
    });
  });
});
