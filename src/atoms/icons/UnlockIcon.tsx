import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const UnlockIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 9V7.18462C5 4.52349 7.02439 2 10 2C12.9756 2 15 4.52349 15 7.18462V9H17V18H15.5V10.5H4.5V16.5H13L14 18H3V9H5ZM6.5 7.18462C6.5 5.22354 7.97561 3.5 10 3.5C12.0244 3.5 13.5 5.22354 13.5 7.18462V9H6.5V7.18462Z'
      />
    </React.Fragment>
  </SvgWrapper>
);

export default UnlockIcon;
