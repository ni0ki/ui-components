import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const PaymentsIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.5 14.5V9.5V8V5.5L3.5 5.5L3.5 8V9.5L3.5 14.5L16.5 14.5ZM18 4L2 4L2 16L18 16V4Z'
      />
      <path d='M16.5 8H7.5V9.5H16.5V8Z' />
      <path d='M6.00004 9.5L5.00004 8H3.5V9.5H6.00004Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default PaymentsIcon;
