import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ThemedButton } from './ThemedButton';
import { $light } from '@colors';

describe.only('WithTheme Wrapper', () => {
  const buttonColors = {
    background: {
      primary: $light[500],
      secondary: $light[700],
      tertiary: $light[900]
    },
    text: {
      primary: $light[100]
    },
    border: {
      primary: $light[100],
      secondary: $light[200]
    }
  };

  describe('behaviour depending on variant prop', () => {
    it('should render a contained button when no variant is provided', () => {
      const ButtonWrapper = mount(<ThemedButton colors={buttonColors} />);

      expect(ButtonWrapper).toHaveStyleRule('background-color', $light[500]);
      expect(ButtonWrapper).toHaveStyleRule('color', $light[100]);
    });

    it('should render a text button when variant is provided with text value', () => {
      const ButtonWrapper = mount(
        <ThemedButton variant='text' colors={buttonColors} />
      );

      expect(ButtonWrapper).toHaveStyleRule('background-color', 'transparent');
      expect(ButtonWrapper).toHaveStyleRule('color', $light[100]);
    });
  });
});
