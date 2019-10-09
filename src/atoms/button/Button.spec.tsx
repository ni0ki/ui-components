import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Button, { ButtonTypes } from './Button';
import { $danger, $light, $secondary, $success } from '@globals/colors';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render', () => {
      const ButtonWrapper = mount(<Button nature={ButtonTypes.DANGER} />);

      expect(ButtonWrapper).toMatchSnapshot();
    });
  });

  describe('Themed button rendering', () => {
    it('should render a danger button', () => {
      const ButtonWrapper = mount(
        <Button nature={ButtonTypes.DANGER}>Danger</Button>
      );
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $danger[500]
      });
    });

    it('should render a success button', () => {
      const ButtonWrapper = mount(
        <Button nature={ButtonTypes.SUCCESS}>Success</Button>
      );
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $success[500]
      });
    });

    it('should render a secondary button', () => {
      const ButtonWrapper = mount(
        <Button nature={ButtonTypes.SECONDARY}>Secondary</Button>
      );
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $secondary[500]
      });
    });

    it('should render a light button', () => {
      const ButtonWrapper = mount(
        <Button nature={ButtonTypes.LIGHT}>Light</Button>
      );
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        background: $light[300]
      });
    });

    it('should render a dark button', () => {
      const ButtonWrapper = mount(
        <Button nature={ButtonTypes.LIGHT} onClick={() => alert('hi')}>
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
      ).toThrowError(
        /Unknown button type. Please refer to the documentation to see possible types/
      );
    });
  });
});
