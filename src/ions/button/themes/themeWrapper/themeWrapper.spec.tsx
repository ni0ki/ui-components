import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { WithTheme } from '@ions';
import { $light } from '@globals/colors';
import { BaseButtonProps, ButtonVariant } from '@atoms/button/Button';

describe('WithTheme Wrapper', () => {
  let WrappedButton: (props: BaseButtonProps) => JSX.Element;
  const theme = {
    background: {
      primary: $light[500],
      secondary: $light[700]
    },
    text: {
      primary: $light[100]
    }
  };

  beforeEach(() => {
    WrappedButton = WithTheme(theme);
  });

  describe('behaviour depending on variant prop', () => {
    it('should render a contained button when no variant is provided', () => {
      const ButtonWrapper = mount(<WrappedButton />);

      expect(ButtonWrapper).toHaveStyleRule('background-color', $light[500]);
      expect(ButtonWrapper).toHaveStyleRule('color', $light[100]);
    });

    it('should render a text button when variant is provided with text value', () => {
      const ButtonWrapper = mount(<WrappedButton variant={ButtonVariant.text} />);

      expect(ButtonWrapper).toHaveStyleRule('background-color', 'transparent');
      expect(ButtonWrapper).toHaveStyleRule('color', $light[500]);
    });
  });
});
