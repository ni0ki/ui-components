import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const MobileIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        d='M13 3H7C5.89543 3 5 3.89543 5 5V15C5 16.1046 5.89543 17 7 17H10.2324L10.5658 17.5H7C5.61929 17.5 4.5 16.3807 4.5 15V5C4.5 3.61929 5.61929 2.5 7 2.5H13C14.3807 2.5 15.5 3.61929 15.5 5V15C15.5 16.2095 14.6411 17.2184 13.5 17.45V16.937C14.3626 16.715 15 15.9319 15 15V5C15 3.89543 14.1046 3 13 3ZM8.5 6V5.5H11.5V6H8.5Z'
        stroke='#0E353D'
      />
    </React.Fragment>
  </SvgIcon>
);

export default MobileIcon;
