import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Text from './Text';

describe('<Text>', () => {
  describe('global render', () => {
    it('should render', () => {
      const TextWrapper = mount(<Text />);

      expect(TextWrapper).toMatchSnapshot();
    });
  });
});
