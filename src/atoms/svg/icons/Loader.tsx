import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const Loader: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      {' '}
      <path
        opacity='0.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z'
        stroke='#FFFFFF'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2'
        stroke='#FFFFFF'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <animateTransform
        attributeName='transform'
        type='rotate'
        from='0 0 0'
        to='360 0 0'
        dur='0.5s'
        repeatCount='indefinite'
      />
    </React.Fragment>
  </SvgIcon>
);

export default Loader;
