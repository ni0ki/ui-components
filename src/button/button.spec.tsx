import * as React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import Button from '.';
import { BasicButton } from '.';

describe('<Button>', () => {
  it('should render with default props', () => {
    const button = shallow(<Button />);

    expect(button.text()).toEqual('Nothing will happen!');
    expect(button).toMatchSnapshot();
  });

  it('should render with provided title', () => {
    const title = 'whatever';
    const button = shallow(<Button title={title} />);

    expect(button.text()).toEqual(title);
    expect(button).toMatchSnapshot();
  });

  it('should render with primary settings', () => {
    const button = shallow(<Button primary={true} />);
    expect(button).toMatchSnapshot();
  });
});

describe('<BasicButton>', () => {
  it('should render with default style', () => {
    const button = mount(<BasicButton />);

    expect(button).toHaveStyleRule('background-color', 'purple');
    expect(button).toMatchSnapshot();
  });

  it('should render with primary style', () => {
    const button = mount(<BasicButton primary={true} />);

    expect(button).toHaveStyleRule('background-color', 'pink');
    expect(button).toMatchSnapshot();
  });
});
