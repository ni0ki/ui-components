import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import BaseButton from './BaseButton';
import { $light, $primary } from '@globals/colors';

const defaultTheme = {
  color: $primary[300],
  background: $primary[500],
  hoverBorder: $primary[600],
  activeBackground: $primary[700]
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

    it('should render default color if none is provided', () => {
      const { color, ...theme } = defaultTheme;
      const Button = mount(<BaseButton theme={theme} />);

      expect(Button).toHaveStyleRule('color', $light[100]);
    });

    it('should have the correct style when disabled', () => {
      const Button = mount(<BaseButton theme={defaultTheme} disabled />);

      expect(Button).toHaveStyleRule('opacity', '0.2');
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
