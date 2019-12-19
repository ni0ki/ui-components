import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const CaretDown: React.FunctionComponent<
  import('../base/SvgIcon').IconProps
> = (props: import('../base/SvgIcon').IconProps): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M7.001 8C6.55555 8 6.33247 8.53857 6.64745 8.85355L9.64745 11.8536C9.84271 12.0488 10.1593 12.0488 10.3546 11.8536L13.3546 8.85355C13.6695 8.53857 13.4465 8 13.001 8H7.001Z' />
    </React.Fragment>
  </SvgIcon>
);

export default CaretDown;
