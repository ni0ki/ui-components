import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const HouseIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M18.0024 8.55107L10.0019 1L2 8.55102L3.1723 9.49916L10.0018 3.05449L16.83 9.49911L18.0024 8.55107Z' />
      <path d='M5.49976 9.99951H3.99976V16.9995H8.99756L8.99756 13.4995L10.9976 13.4995V16.9995H15.9976V9.99951H14.4976V15.4995H12.4976V11.9995H7.49756L7.49756 15.4995H5.49976V9.99951Z' />
    </React.Fragment>
  </SvgIcon>
);

export default HouseIcon;
