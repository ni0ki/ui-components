import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const GeneratorIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M6.25 7.75H9.25V9.25H6.25V7.75Z' />
      <path d='M10.75 7.75H13.75V9.25H10.75V7.75Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.71429 16.5L10 13.25H17.5V3.5H2.5V13.25H5.71429V16.5ZM7.21429 11.75H4V5H16V11.75H9.49557L7.21429 13.48V11.75Z'
      />
    </React.Fragment>
  </SvgWrapper>
);

export default GeneratorIcon;
