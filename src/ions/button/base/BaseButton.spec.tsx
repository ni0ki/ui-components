import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import BaseButton from './BaseButton';
import { $primary } from '@colors';

const defaultTheme = {
  color: $primary[300],
  background: $primary[500],
  hover: {
    border: $primary[600],
    background: $primary[500]
  },
  active: {
    background: $primary[700]
  },
  disabled: {
    color: $primary[100],
    background: $primary[900]
  }
};

describe('<BaseButton>', () => {
  describe('global render', () => {
    it('should render', () => {
      const Button = mount(<BaseButton theme={defaultTheme} />);

      expect(Button).toMatchSnapshot();
    });
  });

  describe('style properties', () => {
    it('should render with the specified theme', () => {
      const Button = mount(<BaseButton theme={defaultTheme} />);

      expect(Button).toHaveStyleRule('color', defaultTheme.color);
      expect(Button).toHaveStyleRule(
        'background-color',
        defaultTheme.background
      );
    });

    it('should have the correct style when disabled', () => {
      const Button = mount(<BaseButton theme={defaultTheme} disabled />);

      expect(Button).toHaveStyleRule('background-color', '#062931');
      expect(Button).toHaveStyleRule('color', '#cce5ea');
      expect(Button).toHaveStyleRule('cursor', 'not-allowed');
    });
  });

  describe('children render', () => {
    it('should render Default when no children are specified', () => {
      const Button = mount(<BaseButton theme={defaultTheme} />);

      expect(Button.text()).toBe('Default');
    });

    it('should render the specified text', () => {
      const text = 'Hello There';
      const Button = mount(
        <BaseButton theme={defaultTheme}>{text}</BaseButton>
      );

      expect(Button.text()).toEqual(text);
    });

    it('should render the specified children', () => {
      const Button = mount(
        <BaseButton theme={defaultTheme}>
          <label>Ok</label>
        </BaseButton>
      );

      expect(Button.find('label')).toBeTruthy();
      expect(Button.text()).toEqual('Ok');
    });
  });

  describe('interaction', () => {
    it('should execute action on click', () => {
      const Button = mount(
        <BaseButton
          theme={defaultTheme}
          onClick={() => window.alert('hello')}
        />
      );

      window.alert = jest.fn();
      Button.simulate('click');
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('hello');
    });
  });
});
