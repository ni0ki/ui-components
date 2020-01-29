import * as React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import { css } from 'styled-components';
import BaseButton from './BaseButton';
import {
  dashGreen00,
  dashGreen03,
  dashGreen05,
  transparent,
  white
} from '@colors';

const selectedTheme = {
  backgroundColor: {
    idle: transparent,
    hover: dashGreen05,
    active: dashGreen03
  },
  textColor: dashGreen00,
  borderColor: {
    idle: dashGreen05,
    hover: dashGreen05,
    active: dashGreen03
  }
};

describe('<BaseButton>', () => {
  describe('global render', () => {
    it('should render', () => {
      const Button = mount(<BaseButton theme={selectedTheme} />);

      expect(Button).toMatchSnapshot();
    });
  });

  describe('style properties', () => {
    it('should render default medium size', () => {
      const Button = mount(<BaseButton theme={selectedTheme} />);

      expect(Button).toHaveStyleRule('height', '40px');
      expect(Button).toHaveStyleRule('padding', '10px 16px');
      expect(Button).toHaveStyleRule('font-size', '16px');
      expect(Button).toHaveStyleRule('line-height', '20px');
    });

    it('should render default colors when properties are not provided', () => {
      const specificTheme = {
        backgroundColor: {
          hover: dashGreen05,
          active: dashGreen03
        },
        borderColor: {
          hover: dashGreen05,
          active: dashGreen03
        }
      };
      const Button = mount(<BaseButton theme={specificTheme} />);

      expect(Button).toHaveStyleRule('color', white);
      expect(Button).toHaveStyleRule('background-color', transparent);
      expect(Button).toHaveStyleRule('border', `1px solid ${transparent}`);
    });

    it('should render with the specified theme', () => {
      const Button = mount(<BaseButton theme={selectedTheme} />);

      expect(Button).toHaveStyleRule('color', selectedTheme.textColor);
      expect(Button).toHaveStyleRule(
        'border',
        `1px solid ${selectedTheme.borderColor.idle}`
      );
      expect(Button).toHaveStyleRule(
        'background-color',
        selectedTheme.backgroundColor.idle
      );
    });

    it('should render specific small size styles', () => {
      const Button = mount(<BaseButton theme={selectedTheme} size='small' />);

      expect(Button).toHaveStyleRule('height', '32px');
      expect(Button).toHaveStyleRule('padding', '8px 16px');
      expect(Button).toHaveStyleRule('font-size', '12px');
      expect(Button).toHaveStyleRule('line-height', '16px');
    });

    it('should render specific large size styles', () => {
      const Button = mount(<BaseButton theme={selectedTheme} size='large' />);

      expect(Button).toHaveStyleRule('height', '48px');
      expect(Button).toHaveStyleRule('padding', '14px 24px');
      expect(Button).toHaveStyleRule('font-size', '16px');
      expect(Button).toHaveStyleRule('line-height', '20px');
    });

    it('should have the correct style when disabled', () => {
      const Button = mount(<BaseButton theme={selectedTheme} disabled />);
      const options = {
        modifier: ':disabled'
      };
      expect(Button).toHaveStyleRule('opacity', '0.6', options);
      expect(Button.find('button')).toHaveStyleRule(
        'cursor',
        'not-allowed',
        options
      );
    });
  });

  describe('children render', () => {
    it('should render Default when no children are specified', () => {
      const Button = mount(<BaseButton theme={selectedTheme} />);

      expect(Button.text()).toBe('Default');
    });

    it('should render the specified text', () => {
      const text = 'Hello There';
      const Button = mount(
        <BaseButton theme={selectedTheme}>{text}</BaseButton>
      );

      expect(Button.text()).toEqual(text);
    });

    it('should render the specified children', () => {
      const Button = mount(
        <BaseButton theme={selectedTheme}>
          <label>Ok</label>
        </BaseButton>
      );

      expect(Button.find('label')).toBeTruthy();
      expect(Button.text()).toEqual('Ok');
    });

    it('should apply extra styles', () => {
      const styles = css`
        color: red;
      `;

      const Button = mount(
        <BaseButton theme={selectedTheme} customStyle={styles} />
      );

      expect(Button).toHaveStyleRule('color', 'red');
    });
  });

  describe('interaction', () => {
    it('should execute action on click', () => {
      const Button = mount(
        <BaseButton
          theme={selectedTheme}
          onClick={() => window.alert('hello')}
        />
      );

      window.alert = jest.fn();
      Button.simulate('click');
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('hello');
    });

    it('should not execute action on click when the button is disabled', () => {
      const Button = mount(
        <BaseButton
          theme={selectedTheme}
          onClick={() => window.alert('hello')}
          disabled
        />
      );

      window.alert = jest.fn();
      Button.simulate('click');
      expect(window.alert).toHaveBeenCalledTimes(0);
    });
  });

  describe('No matching button size case', () => {
    it('should throw when the size is wrong', () => {
      expect(() =>
        // @ts-ignore
        shallow(<BaseButton size='unknown' />)
      ).toThrowError(/Unexpected value. Should have been never./);
    });
  });
});
