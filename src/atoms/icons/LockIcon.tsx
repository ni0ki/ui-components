import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const LockIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M9.99993 3.5C8.03933 3.5 6.59346 5.11664 6.5043 7H5.00317C5.0942 4.40797 7.09323 2 9.99993 2C12.9755 2 14.9999 4.52349 14.9999 7.18462V9H17V18H15.5V10.5H4.5V16.5H13L14 18H3V9H13.4999V7.18462C13.4999 5.22354 12.0243 3.5 9.99993 3.5Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default LockIcon;
