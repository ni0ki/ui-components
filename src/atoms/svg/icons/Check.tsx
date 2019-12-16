import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const Check: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        d='M5.5 10L8.45928 13L14.4796 7'
        stroke='#20b422'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </React.Fragment>
  </SvgIcon>
);

export default Check;
