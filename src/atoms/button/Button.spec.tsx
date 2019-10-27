import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Button from './Button';
import { $danger, $light, $secondary, $success } from '@colors';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render', () => {
      const ButtonWrapper = mount(<Button nature='danger' />);

      expect(ButtonWrapper).toMatchSnapshot();
    });
  });

  describe('Themed button rendering', () => {
    it('should render a danger button', () => {
      const ButtonWrapper = mount(<Button nature='danger'>Danger</Button>);
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $danger[500]
      });
    });

    it('should render a success button', () => {
      const ButtonWrapper = mount(<Button nature='success'>Success</Button>);
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $success[500]
      });
    });

    it('should render a secondary button', () => {
      const ButtonWrapper = mount(
        <Button nature='secondary'>Secondary</Button>
      );
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $secondary[500]
      });
    });

    it('should render a light button', () => {
      const ButtonWrapper = mount(<Button nature='light'>Light</Button>);
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $light[300]
      });
    });

    it('should render a dark button', () => {
      const ButtonWrapper = mount(
        <Button nature='dark' onClick={() => alert('hi')}>
          Dark
        </Button>
      );
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $light[400]
      });
    });
  });

  describe('No matching button type case', () => {
    it('should throw when the type is wrong', () => {
      expect(() =>
        // @ts-ignore
        shallow(<Button nature='unknown'>Unknown</Button>)
      ).toThrowError(/Unexpected value. Should have been never./);
    });
  });
});
