import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonSecondary from './ButtonSecondary';
import {
  dashGreen00,
  dashGreen01,
  dashGreen02,
  dashGreen03,
  dashGreen05,
  transparent,
  white
} from '@colors';

describe('<ButtonSecondary>', () => {
  describe('global render', () => {
    it('should render', () => {
      const SecondaryButton = mount(<ButtonSecondary />);
      const DarkSecondaryButton = mount(<ButtonSecondary theme='dark' />);

      expect(SecondaryButton).toMatchSnapshot();
      expect(DarkSecondaryButton).toMatchSnapshot();
    });

    describe('Secondary style', () => {
      describe('default theme', function() {
        it('should have the correct style in idle state', () => {
          const SecondaryButton = mount(<ButtonSecondary />);

          expect(SecondaryButton).toHaveStyleRule('color', dashGreen00);
          expect(SecondaryButton).toHaveStyleRule(
            'background-color',
            transparent
          );
          expect(SecondaryButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen05}`
          );
        });

        it('should have the correct style in hover state', () => {
          const SecondaryButton = mount(<ButtonSecondary />);
          const options = {
            modifier: ':hover:not(:disabled)'
          };

          expect(SecondaryButton).toHaveStyleRule('color', dashGreen00);
          expect(SecondaryButton).toHaveStyleRule(
            'background-color',
            dashGreen05,
            options
          );
          expect(SecondaryButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen05}`,
            options
          );
        });

        it('should have the correct style in active state', () => {
          const SecondaryButton = mount(<ButtonSecondary />);
          const options = {
            modifier: ':active:not(:disabled)'
          };

          expect(SecondaryButton).toHaveStyleRule('color', dashGreen00);
          expect(SecondaryButton).toHaveStyleRule(
            'background-color',
            dashGreen03,
            options
          );
          expect(SecondaryButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen03}`,
            options
          );
        });
      });

      describe('dark theme', function() {
        it('should have the correct style in idle state', () => {
          const DarkSecondaryButton = mount(<ButtonSecondary theme='dark' />);

          expect(DarkSecondaryButton).toHaveStyleRule('color', white);
          expect(DarkSecondaryButton).toHaveStyleRule(
            'background-color',
            transparent
          );
          expect(DarkSecondaryButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen01}`
          );
        });

        it('should have the correct style in hover state', () => {
          const DarkSecondaryButton = mount(<ButtonSecondary theme='dark' />);
          const options = {
            modifier: ':hover:not(:disabled)'
          };

          expect(DarkSecondaryButton).toHaveStyleRule('color', white);
          expect(DarkSecondaryButton).toHaveStyleRule(
            'background-color',
            dashGreen01,
            options
          );
          expect(DarkSecondaryButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen01}`,
            options
          );
        });

        it('should have the correct style in active state', () => {
          const DarkSecondaryButton = mount(<ButtonSecondary theme='dark' />);
          const options = {
            modifier: ':active:not(:disabled)'
          };

          expect(DarkSecondaryButton).toHaveStyleRule('color', white);
          expect(DarkSecondaryButton).toHaveStyleRule(
            'background-color',
            dashGreen02,
            options
          );
          expect(DarkSecondaryButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen02}`,
            options
          );
        });
      });
    });
  });
});
