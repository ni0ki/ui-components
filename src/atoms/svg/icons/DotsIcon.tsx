import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const DotsIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M9 16L9 14L11 14L11 16L9 16Z' />
      <path d='M9 11L9 9L11 9L11 11L9 11Z' />
      <path d='M9 6L9 4L11 4L11 6L9 6Z' />
    </React.Fragment>
  </SvgIcon>
);

export default DotsIcon;
