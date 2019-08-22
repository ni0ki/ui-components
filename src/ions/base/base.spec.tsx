import * as React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import BaseButton from './index';
import { $gray200, $primary500 } from '@globals/colors';

describe('<BaseButton>', () => {
  it('should render', () => {
    const button = shallow(<BaseButton />);

    expect(button).toMatchSnapshot();
  });
});

describe('<BaseButton>', () => {
  it('should render with default style', () => {
    const button = mount(<BaseButton />);

    expect(button).toHaveStyleRule('color', $gray200);
    expect(button).toHaveStyleRule('background-color', $primary500);
    expect(button).toMatchSnapshot();
  });

  it('should render with primary style', () => {
    const button = mount(<BaseButton theme={{ color: 'red' }} />);

    expect(button).toHaveStyleRule('color', 'red');
    expect(button).toMatchSnapshot();
  });
});
