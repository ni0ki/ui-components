import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('<Button>', () => {
  it('should render with default props', () => {
    const checkbox = shallow(<Button />);

    expect(checkbox.text()).toEqual('Nothing will happen!');
    expect(checkbox).toMatchSnapshot();
  });

  it('should render with provided title', () => {
    const title = 'whatever';
    const checkbox = shallow(<Button title={title} />);

    expect(checkbox.text()).toEqual(title);
    expect(checkbox).toMatchSnapshot();
  });
});
