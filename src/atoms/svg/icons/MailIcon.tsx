import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const MailIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 4L18 16H16.5L16.5 14.5L14 14.5L15 16L2 16V4H18ZM16.5 5.5V14.5L3.5 14.5L3.5 5.5L16.5 5.5Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.916 5.62404L9.99988 10.9014L2.08397 5.62403L2.91603 4.37597L9.99989 9.09861L17.084 4.37596L17.916 5.62404Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default MailIcon;
