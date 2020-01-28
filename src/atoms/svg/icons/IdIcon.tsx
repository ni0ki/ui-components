import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const IdIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M5 7H6.5V8.5H5V7Z' />
      <path fillRule='evenodd' clipRule='evenodd' d='M6.5 7H5V8.5H6.5V7Z' />
      <path d='M16.5 5.5L16.5 16H18L18 4H2V16H15L14 14.5H3.5L3.5 5.5L16.5 5.5Z' />
      <path d='M15 7H8V8.5H14L15 7Z' />
      <path d='M15 10H8V11.5H14L15 10Z' />
    </React.Fragment>
  </SvgIcon>
);

export default IdIcon;
