import * as React from 'react';
import iconsDef from '@icons/icons-defs.svg';
import { Icon } from '@ions';
import { Props as IconProps } from '@ions/icon/Icon';

export interface Props extends IconProps {
  name: string;
}

const SvgIcon: React.FunctionComponent<Props> = ({
  name,
  ...props
}: Props): JSX.Element => (
  <Icon {...props}>
    <use xlinkHref={`${iconsDef}#icon-${name}`} />
  </Icon>
);

export default SvgIcon;
