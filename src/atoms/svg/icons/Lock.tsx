import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const Lock: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6 5.19231V6H3V16H14L13 15H4V7H16V16H17V6H14V5.19231C14 2.9025 12.234 1 10 1C7.766 1 6 2.9025 6 5.19231ZM10 2C8.36801 2 7 3.40371 7 5.19231V6H13V5.19231C13 3.40371 11.632 2 10 2ZM9 10H10V12H11V9H9V10Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default Lock;
