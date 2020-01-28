import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonGhost from './ButtonGhost';
import {
  dashGreen00,
  dashGreen01,
  dashGreen05,
  transparent,
  white
} from '@colors';

describe('<ButtonGhost>', () => {
  describe('global render', () => {
    it('should render', () => {
      const GhostButton = mount(<ButtonGhost />);
      const DarkGhostButton = mount(<ButtonGhost theme='dark' />);

      expect(GhostButton).toMatchSnapshot();
      expect(DarkGhostButton).toMatchSnapshot();
    });

    describe('Ghost style', () => {
      describe('default theme', function() {
        it('should have the correct style in idle state', () => {
          const GhostButton = mount(<ButtonGhost />);

          expect(GhostButton).toHaveStyleRule('color', dashGreen00);
          expect(GhostButton).toHaveStyleRule('background-color', transparent);
          expect(GhostButton).toHaveStyleRule(
            'border',
            `1px solid ${transparent}`
          );
          expect(GhostButton).toHaveStyleRule('min-width', '32px');
        });

        it('should have the correct style in hover state', () => {
          const GhostButton = mount(<ButtonGhost />);
          const options = {
            modifier: ':hover:not(:disabled)'
          };

          expect(GhostButton).toHaveStyleRule('color', dashGreen00);
          expect(GhostButton).toHaveStyleRule(
            'background-color',
            transparent,
            options
          );
          expect(GhostButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen05}`,
            options
          );
        });

        it('should have the correct style in active state', () => {
          const GhostButton = mount(<ButtonGhost />);
          const options = {
            modifier: ':active:not(:disabled)'
          };

          expect(GhostButton).toHaveStyleRule('color', dashGreen00);
          expect(GhostButton).toHaveStyleRule(
            'background-color',
            dashGreen05,
            options
          );
          expect(GhostButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen05}`,
            options
          );
        });
      });

      describe('dark theme', function() {
        it('should have the correct style in idle state', () => {
          const DarkGhostButton = mount(<ButtonGhost theme='dark' />);

          expect(DarkGhostButton).toHaveStyleRule('color', white);
          expect(DarkGhostButton).toHaveStyleRule(
            'background-color',
            transparent
          );
          expect(DarkGhostButton).toHaveStyleRule(
            'border',
            `1px solid ${transparent}`
          );
        });

        it('should have the correct style in hover state', () => {
          const DarkGhostButton = mount(<ButtonGhost theme='dark' />);
          const options = {
            modifier: ':hover:not(:disabled)'
          };

          expect(DarkGhostButton).toHaveStyleRule('color', white);
          expect(DarkGhostButton).toHaveStyleRule(
            'background-color',
            transparent,
            options
          );
          expect(DarkGhostButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen01}`,
            options
          );
        });

        it('should have the correct style in active state', () => {
          const DarkGhostButton = mount(<ButtonGhost theme='dark' />);
          const options = {
            modifier: ':active:not(:disabled)'
          };

          expect(DarkGhostButton).toHaveStyleRule('color', white);
          expect(DarkGhostButton).toHaveStyleRule(
            'background-color',
            dashGreen01,
            options
          );
          expect(DarkGhostButton).toHaveStyleRule(
            'border',
            `1px solid ${dashGreen01}`,
            options
          );
        });
      });
    });
  });
});
