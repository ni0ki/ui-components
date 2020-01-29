import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const EditIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.8833 1L19 5.11667L16.6355 7.48114L15.5802 6.42584L16.8894 5.11667L14.8833 3.1106L13.5742 4.41977L12.5189 3.36447L14.8833 1ZM11.2097 4.67365L15.3264 8.79032L6.48889 17.6278L1 19L2.37222 13.5111L11.2097 4.67365ZM3.71982 14.2741L3.05113 16.9489L5.7259 16.2802L13.2158 8.79032L11.2097 6.78424L3.71982 14.2741Z'
      />
    </React.Fragment>
  </SvgWrapper>
);

export default EditIcon;
