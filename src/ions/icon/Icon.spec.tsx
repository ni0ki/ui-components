import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Icon from './Icon';
import { $light } from '@globals/colors';

describe('<Icon>', () => {
  describe('global render', () => {
    it('should render', () => {
      const IconWrapper = mount(<Icon />);

      expect(IconWrapper).toMatchSnapshot();
    });

    describe('component style', () => {
      it('should set a default style if none is provided', () => {
        const IconWrapper = mount(<Icon />);

        expect(IconWrapper).toHaveStyleRule('fill', $light[700]);
        expect(IconWrapper).toHaveStyleRule('cursor', 'pointer');
        expect(IconWrapper).toHaveStyleRule('width', '2em');
        expect(IconWrapper).toHaveStyleRule('height', '2em');
      });

      it('should set the provided style', () => {
        const IconWrapper = mount(<Icon size={4} color='red' />);

        expect(IconWrapper).toHaveStyleRule('fill', 'red');
        expect(IconWrapper).toHaveStyleRule('width', '4em');
        expect(IconWrapper).toHaveStyleRule('height', '4em');
      });

      it('should handle disabled mode', () => {
        const IconWrapper = mount(<Icon disabled />);

        expect(IconWrapper).toHaveStyleRule('opacity', '0.2');
        expect(IconWrapper).toHaveStyleRule('cursor', 'not-allowed');
      });
    });
  });
});
