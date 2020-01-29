import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const GeneratorIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M6.25 7.75H9.25V9.25H6.25V7.75Z' />
      <path d='M10.75 7.75H13.75V9.25H10.75V7.75Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.71429 16.5L10 13.25H17.5V3.5H2.5V13.25H5.71429V16.5ZM7.21429 11.75H4V5H16V11.75H9.49557L7.21429 13.48V11.75Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default GeneratorIcon;
