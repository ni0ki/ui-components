import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const DotsIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M9 16L9 14L11 14L11 16L9 16Z' />
      <path d='M9 11L9 9L11 9L11 11L9 11Z' />
      <path d='M9 6L9 4L11 4L11 6L9 6Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default DotsIcon;
