import * as React from 'react';
import { mount } from 'enzyme';
import SvgIcon from './SvgIcon';

describe('<SvgIcon>', () => {
  describe('global render', () => {
    it('should render', () => {
      const SvgWrapper = mount(
        <SvgIcon>
          <React.Fragment>
            <path d='123' />
          </React.Fragment>
        </SvgIcon>
      );

      expect(SvgWrapper).toMatchSnapshot();
    });
  });

  describe('svg rendering', () => {
    it('should render the correct svg', () => {
      const SvgWrapper = mount(
        <SvgIcon title='Test'>
          <React.Fragment>
            <path d='123' />
          </React.Fragment>
        </SvgIcon>
      );
      const path = SvgWrapper.find('path');
      expect(path.prop('d')).toEqual('123');
      expect(SvgWrapper.find('title').text()).toEqual('Test');
    });

    it('should render svg without title if not provided', () => {
      const SvgWrapper = mount(
        <SvgIcon>
          <React.Fragment>
            <path d='123' />
          </React.Fragment>
        </SvgIcon>
      );
      expect(SvgWrapper.contains('title')).toBeFalsy();
    });
  });
});
