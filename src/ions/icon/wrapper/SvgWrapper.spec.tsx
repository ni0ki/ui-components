import * as React from 'react';
import { mount } from 'enzyme';
import SvgWrapper from './SvgWrapper';

describe('<SvgIcon>', () => {
  describe('global render', () => {
    it('should render', () => {
      const SvgWrapperComponent = mount(
        <SvgWrapper>
          <React.Fragment>
            <path d='123' />
          </React.Fragment>
        </SvgWrapper>
      );

      expect(SvgWrapperComponent).toMatchSnapshot();
    });
  });

  describe('svg rendering', () => {
    it('should render the correct svg', () => {
      const SvgWrapperComponent = mount(
        <SvgWrapper title='Test'>
          <React.Fragment>
            <path d='123' />
          </React.Fragment>
        </SvgWrapper>
      );
      const path = SvgWrapperComponent.find('path');
      expect(path.prop('d')).toEqual('123');
      expect(SvgWrapperComponent.find('title').text()).toEqual('Test');
    });

    it('should render svg without title if not provided', () => {
      const SvgWrapperComponent = mount(
        <SvgWrapper>
          <React.Fragment>
            <path d='123' />
          </React.Fragment>
        </SvgWrapper>
      );
      expect(SvgWrapperComponent.contains('title')).toBeFalsy();
    });
  });
});
