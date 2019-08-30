import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import WrappedSvgIcon from './WrappedSvgIcon';

describe('<WrappedSvgIcon>', () => {
  describe('global render', () => {
    it('should render', () => {
      const TextWrapper = mount(<WrappedSvgIcon name='pen' />);

      expect(TextWrapper).toMatchSnapshot();
    });
  });

  describe('svg rendering', () => {
    it('should render with the correct content', () => {
      const TextWrapper = mount(<WrappedSvgIcon name='share' />);
      const ButtonWrapper = TextWrapper.find('button');

      expect(ButtonWrapper).toBeTruthy();
      expect(TextWrapper.find('svg')).toBeTruthy();
      expect(ButtonWrapper).toHaveStyleRule('background-color', 'transparent');
    });
  });
});
