import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const PasswordHistory: React.FunctionComponent<
  import('../base/SvgIcon').IconProps
> = (props: import('../base/SvgIcon').IconProps): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M10.005 16.5576C13.5875 16.5549 16.5 13.638 16.5 10.0288C16.5 6.41796 13.5848 3.5 10 3.5C6.41523 3.5 3.5 6.41796 3.5 10.0288C3.5 10.0665 3.50032 10.1042 3.50095 10.1418L4.61108 9.00004L5.65672 10.0755L2.82843 12.9845L0 10.0754L1.04564 8.99997L2.00013 9.98168C2.0254 5.56918 5.59738 2 10 2C14.4183 2 18 5.59461 18 10.0288C18 14.1358 14.9273 17.5226 10.9632 18L10.005 16.5576Z' />
      <path d='M9.50007 6.50016L11 5.50021L11.0001 11.4995H7V9.99948H9.50007V6.50016Z' />
    </React.Fragment>
  </SvgIcon>
);

export default PasswordHistory;
