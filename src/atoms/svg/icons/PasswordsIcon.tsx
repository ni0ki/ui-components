import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const PasswordsIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M4.5 10.5H15.5V18H17V9H3V18H14L13 16.5H4.5V10.5Z' />{' '}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.5 13.5H9V12H11V15H9.5V13.5Z'
      />{' '}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 3.5C7.97561 3.5 6.5 5.22354 6.5 7.18462V9H5V7.18462C5 4.52349 7.02439 2 10 2C12.9756 2 15 4.52349 15 7.18462V9H13.5V7.18462C13.5 5.22354 12.0244 3.5 10 3.5Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default PasswordsIcon;
