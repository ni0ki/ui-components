import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const CopyIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 7.05556V2H7.27778V3.5H4.5V7.05556H3ZM9.72222 2V3.5H12.5V5H14V2H9.72222ZM6 15V13.5H4.5V9.94444H3V15H6Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6 5V18H17V5H6ZM7.5 6.5H15.5V16.5H7.5V6.5Z'
      />
    </React.Fragment>
  </SvgWrapper>
);

export default CopyIcon;
