import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const CheckIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 3.93779L7.89681 16L2 11.0719L2.89069 9.95575L7.72252 13.9939L16.9309 3L18 3.93779Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default CheckIcon;
