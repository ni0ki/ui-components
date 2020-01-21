import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const ArrowDown: React.FunctionComponent<
  import('../base/SvgIcon').IconProps
> = (props: import('../base/SvgIcon').IconProps): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 11.5503L5.63659 6L4.5 7.00399L10 14L15.5 7.00399L14.3634 6L10 11.5503Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default ArrowDown;
