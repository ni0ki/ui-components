import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const CloseIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M8.97561 10L3 15.9756L4.02439 17L10 11.0244L15.9756 17L17 15.9756L11.0244 10L17 4.02439L15.9756 3L10 8.97562L4.02439 3.00001L3 4.0244L8.97561 10Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default CloseIcon;
