import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const IdIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M5 7H6.5V8.5H5V7Z' />
      <path fillRule='evenodd' clipRule='evenodd' d='M6.5 7H5V8.5H6.5V7Z' />
      <path d='M16.5 5.5L16.5 16H18L18 4H2V16H15L14 14.5H3.5L3.5 5.5L16.5 5.5Z' />
      <path d='M15 7H8V8.5H14L15 7Z' />
      <path d='M15 10H8V11.5H14L15 10Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default IdIcon;
