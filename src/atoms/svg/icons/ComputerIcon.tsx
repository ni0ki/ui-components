import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const ComputerIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.5 4.5H4.5V12H15.5V11.9951H17V12L19 15.5V17H1V15.5L3 12V3H17V9.49516L15.5 10.4952V4.5ZM3.87048 13.5L2.72763 15.5H17.2724L16.1295 13.5H3.87048Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default ComputerIcon;
