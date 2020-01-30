import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const InfoCircleIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M9.25 13.5H10.75V9H9.25V13.5Z' />
      <path d='M9.25 8H10.75V6.5H9.25V8Z' />
      <path d='M13.853 15.2361C11.3091 17.1128 7.70715 16.8995 5.40381 14.5962C2.8654 12.0578 2.8654 7.94221 5.40381 5.40381C7.94221 2.8654 12.0578 2.8654 14.5962 5.40381C16.8887 7.69634 17.1108 11.2753 15.2624 13.8171L16.3338 14.8885C18.7619 11.7507 18.5362 7.22251 15.6569 4.34315C12.5327 1.21895 7.46734 1.21895 4.34315 4.34315C1.21895 7.46734 1.21895 12.5327 4.34315 15.6569C7.23323 18.5469 11.7844 18.7635 14.9234 16.3066L13.853 15.2361Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default InfoCircleIcon;
