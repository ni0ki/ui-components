import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const SearchIcon: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.7006 13.5984C14.6274 13.5984 17 11.2258 17 8.29919C17 5.37253 14.6274 3 11.7006 3C8.77387 3 6.40126 5.37253 6.40126 8.29919C6.40126 11.2258 8.77387 13.5984 11.7006 13.5984ZM15.5547 8.29919C15.5547 10.4277 13.8292 12.1531 11.7006 12.1531C9.57208 12.1531 7.84654 10.4277 7.84654 8.29919C7.84654 6.17071 9.57208 4.44523 11.7006 4.44523C13.8292 4.44523 15.5547 6.17071 15.5547 8.29919Z'
      />
      <path d='M6.37465 12.6055L3 15.9777L4.02162 17L7.39627 13.6278L6.37465 12.6055Z' />
    </React.Fragment>
  </SvgIcon>
);

export default SearchIcon;
