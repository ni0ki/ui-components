import * as React from 'react';
import { mount } from 'enzyme';
import SvgIcon from './SvgIcon';

describe('<SvgIcon>', () => {
  describe('global render', () => {
    it('should render', () => {
      const SvgWrapper = mount(<SvgIcon name='bell' />);

      expect(SvgWrapper).toMatchSnapshot();
    });
  });

  describe('svg rendering', () => {
    it('should render the correct svg', () => {
      const SvgWrapper = mount(<SvgIcon name='pen' />);

      expect(SvgWrapper.find('use').prop('xlinkHref')).toContain('#icon-pen');
    });
  });
});
