import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ButtonSuccess } from '@ions';
import { $light, $success } from '@globals/colors';

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

        expect(ContainedButtonSuccess).toHaveStyleRule('color', $light[100]);
        expect(ContainedButtonSuccess).toHaveStyleRule(
          'background-color',
          $success[500]
        );
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonSuccess = mount(<ButtonSuccess variant='text' />);

        expect(TextButtonSuccess).toHaveStyleRule('color', $success[500]);
        expect(TextButtonSuccess).toHaveStyleRule(
          'background-color',
          'transparent'
        );
      });
    });
  });
});
