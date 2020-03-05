import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const MoreIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M4 9H6V11H4V9Z' />
      <path d='M9 9H11V11H9V9Z' />
      <path d='M14 9H16V11H14V9Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default MoreIcon;
