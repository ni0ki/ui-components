import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const RevokeIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M13.78 15.2885C12.7149 16.0511 11.4099 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 11.4099 16.0511 12.7149 15.2885 13.78L16.3609 14.8524C17.3892 13.5065 18 11.8246 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8246 18 13.5065 17.3892 14.8524 16.3609L13.78 15.2885Z' />
      <path d='M14.0459 4.50002L15.1066 5.56068L5.56062 15.1066L4.49996 14.046L14.0459 4.50002Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default RevokeIcon;
