import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ButtonLight } from '@ions';
import { $light } from '@globals/colors';
import { ButtonVariant } from '@atoms/button/Button';

describe('<ButtonLight>', () => {
  describe('global render', () => {
    it('should render', () => {
      const ContainedButtonLight = mount(<ButtonLight />);
      const TextButtonLight = mount(<ButtonLight variant={ButtonVariant.text} />);

      expect(ContainedButtonLight).toMatchSnapshot();
      expect(TextButtonLight).toMatchSnapshot();
    });

    describe('Light style', () => {
      it('should have the correct style for contained buttons ', () => {
        const ContainedButtonLight = mount(<ButtonLight />);

        expect(ContainedButtonLight).toHaveStyleRule('color', $light[700]);
        expect(ContainedButtonLight).toHaveStyleRule(
          'background-color',
          $light[300]
        );
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonLight = mount(<ButtonLight variant={ButtonVariant.text} />);

        expect(TextButtonLight).toHaveStyleRule('color', $light[700]);
        expect(TextButtonLight).toHaveStyleRule(
          'background-color',
          'transparent'
        );
      });
    });
  });
});
