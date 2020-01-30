import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonPrimary from './ButtonPrimary';
import {
  dashDarkerGreen00,
  dashGreen00,
  midGreen00,
  midGreen01,
  midGreen03,
  white
} from '@colors';

describe('<ButtonPrimary>', () => {
  describe('global render', () => {
    it('should render', () => {
      const PrimaryButton = mount(<ButtonPrimary />);
      const DarkPrimaryButton = mount(<ButtonPrimary theme='dark' />);

      expect(PrimaryButton).toMatchSnapshot();
      expect(DarkPrimaryButton).toMatchSnapshot();
    });

    describe('Primary style', () => {
      describe('default theme', function() {
        it('should have the correct style in idle state', () => {
          const PrimaryButton = mount(<ButtonPrimary />);

          expect(PrimaryButton).toHaveStyleRule('color', white);
          expect(PrimaryButton).toHaveStyleRule('background-color', midGreen00);
        });

        it('should have the correct style in hover state', () => {
          const PrimaryButton = mount(<ButtonPrimary />);
          const options = {
            modifier: ':hover:not(:disabled)'
          };

          expect(PrimaryButton).toHaveStyleRule('color', white);
          expect(PrimaryButton).toHaveStyleRule(
            'background-color',
            dashGreen00,
            options
          );
        });

        it('should have the correct style in active state', () => {
          const PrimaryButton = mount(<ButtonPrimary />);
          const options = {
            modifier: ':active:not(:disabled)'
          };

          expect(PrimaryButton).toHaveStyleRule('color', white);
          expect(PrimaryButton).toHaveStyleRule(
            'background-color',
            dashDarkerGreen00,
            options
          );
        });
      });

      describe('dark theme', function() {
        it('should have the correct style in idle state', () => {
          const DarkPrimaryButton = mount(<ButtonPrimary theme='dark' />);

          expect(DarkPrimaryButton).toHaveStyleRule('color', dashGreen00);
          expect(DarkPrimaryButton).toHaveStyleRule('background-color', white);
        });

        it('should have the correct style in hover state', () => {
          const DarkPrimaryButton = mount(<ButtonPrimary theme='dark' />);
          const options = {
            modifier: ':hover:not(:disabled)'
          };

          expect(DarkPrimaryButton).toHaveStyleRule('color', dashGreen00);
          expect(DarkPrimaryButton).toHaveStyleRule(
            'background-color',
            midGreen03,
            options
          );
        });

        it('should have the correct style in active state', () => {
          const DarkPrimaryButton = mount(<ButtonPrimary theme='dark' />);
          const options = {
            modifier: ':active:not(:disabled)'
          };

          expect(DarkPrimaryButton).toHaveStyleRule('color', dashGreen00);
          expect(DarkPrimaryButton).toHaveStyleRule(
            'background-color',
            midGreen01,
            options
          );
        });
      });
    });
  });
});
