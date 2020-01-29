import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const ArrowDownIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 11.5503L5.63659 6L4.5 7.00399L10 14L15.5 7.00399L14.3634 6L10 11.5503Z'
      />
    </React.Fragment>
  </SvgWrapper>
);

export default ArrowDownIcon;
