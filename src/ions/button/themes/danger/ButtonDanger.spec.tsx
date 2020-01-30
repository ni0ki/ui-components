import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonDanger from './ButtonDanger';
import {
  functionalRed00,
  functionalRed01,
  functionalRed02,
  white
} from '@colors';

describe('<ButtonDanger>', () => {
  describe('global render', () => {
    it('should render', () => {
      const DangerButton = mount(<ButtonDanger />);
      const DarkDangerButton = mount(<ButtonDanger theme='dark' />);

      expect(DangerButton).toMatchSnapshot();
      expect(DarkDangerButton).toMatchSnapshot();
    });

    describe('Danger style', () => {
      describe('default theme', function() {
        it('should have the correct style for idle state', () => {
          const DangerButton = mount(<ButtonDanger />);

          expect(DangerButton).toHaveStyleRule('color', white);
          expect(DangerButton).toHaveStyleRule(
            'background-color',
            functionalRed02
          );
        });

        it('should have the correct style for hover state', () => {
          const DangerButton = mount(<ButtonDanger />);
          const options = {
            modifier: ':hover:not(:disabled)'
          };

          expect(DangerButton).toHaveStyleRule('color', white);
          expect(DangerButton).toHaveStyleRule(
            'background-color',
            functionalRed01,
            options
          );
        });

        it('should have the correct style for active state', () => {
          const DangerButton = mount(<ButtonDanger />);
          const options = {
            modifier: ':active:not(:disabled)'
          };

          expect(DangerButton).toHaveStyleRule('color', white);
          expect(DangerButton).toHaveStyleRule(
            'background-color',
            functionalRed00,
            options
          );
        });
      });

      describe('dark theme', function() {
        it('should not support dark theme (fallback to default)', () => {
          const DarkDangerButton = mount(<ButtonDanger theme='dark' />);

          expect(DarkDangerButton).toHaveStyleRule('color', white);
          expect(DarkDangerButton).toHaveStyleRule(
            'background-color',
            functionalRed02
          );
        });
      });
    });
  });
});
