import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { StyledText } from './StyledText';

describe('<Text>', () => {
  describe('global render', () => {
    it('should render', () => {
      const TextWrapper = mount(<StyledText />);

      expect(TextWrapper).toMatchSnapshot();
    });
  });
});
