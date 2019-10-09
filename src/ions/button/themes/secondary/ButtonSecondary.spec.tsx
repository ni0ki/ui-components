import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ButtonSecondary } from '@ions';
import { $light, $secondary } from '@globals/colors';
import { ButtonVariant } from '@atoms/button/Button';

describe('<ButtonSecondary>', () => {
  describe('global render', () => {
    it('should render', () => {
      const ContainedButtonSecondary = mount(<ButtonSecondary />);
      const TextButtonSecondary = mount(<ButtonSecondary variant={ButtonVariant.text} />);

      expect(ContainedButtonSecondary).toMatchSnapshot();
      expect(TextButtonSecondary).toMatchSnapshot();
    });

    describe('Secondary style', () => {
      it('should have the correct style for contained buttons ', () => {
        const ContainedButtonSecondary = mount(<ButtonSecondary />);

        expect(ContainedButtonSecondary).toHaveStyleRule('color', $light[100]);
        expect(ContainedButtonSecondary).toHaveStyleRule(
          'background-color',
          $secondary[500]
        );
      });

      it('should have the correct style for text buttons ', () => {
        const TextButtonSecondary = mount(<ButtonSecondary variant={ButtonVariant.text} />);

        expect(TextButtonSecondary).toHaveStyleRule('color', $secondary[500]);
        expect(TextButtonSecondary).toHaveStyleRule(
          'background-color',
          'transparent'
        );
      });
    });
  });
});
