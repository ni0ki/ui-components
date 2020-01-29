import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Button from './Button';
import {
  dashDarkerGreen00,
  dashGreen00,
  dashGreen03,
  dashGreen05,
  functionalRed00,
  functionalRed01,
  functionalRed02,
  midGreen00,
  transparent
} from '@colors';

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
        backgroundColor: {
          idle: functionalRed02,
          hover: functionalRed01,
          active: functionalRed00
        }
      });
    });

    it('should render a primary button', () => {
      const ButtonWrapper = mount(<Button nature='primary'>Primary</Button>);
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        backgroundColor: {
          idle: midGreen00,
          hover: dashGreen00,
          active: dashDarkerGreen00
        }
      });
    });

    it('should render a secondary button', () => {
      const ButtonWrapper = mount(
        <Button nature='secondary'>Secondary</Button>
      );
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        backgroundColor: {
          idle: transparent,
          hover: dashGreen05,
          active: dashGreen03
        },
        textColor: dashGreen00,
        borderColor: {
          idle: dashGreen05,
          hover: dashGreen05,
          active: dashGreen03
        }
      });
    });

    it('should render a ghost button', () => {
      const ButtonWrapper = mount(<Button nature='ghost'>Ghost</Button>);
      expect(ButtonWrapper.find('BaseButton').prop('theme')).toMatchObject({
        backgroundColor: {
          idle: transparent,
          hover: transparent,
          active: dashGreen05
        },
        textColor: dashGreen00,
        borderColor: {
          idle: transparent,
          hover: dashGreen05,
          active: dashGreen05
        }
      });
    });
  });

  describe('No matching button type case', () => {
    it('should throw when the nature is wrong', () => {
      const ButtonWrapper = shallow(<Button nature='primary'>Unknown</Button>);
      expect(() => ButtonWrapper.setProps({ nature: 'unknown' })).toThrowError(
        /Unexpected value. Should have been never./
      );
    });
  });
});
