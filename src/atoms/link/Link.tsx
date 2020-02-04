import * as React from 'react';
import ThemedLink from '@ions/link/ThemedLink';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Defines a theme for a link
   * @default default
   */
  theme?: 'default' | 'dark';
  /**
   * Disabled state of the link
   * @default false
   */
  disabled?: boolean;
  /**
   * The link size
   @default medium
   */
  size?: 'small' | 'medium' | 'large';
}

const Link: React.FunctionComponent<Props> = (props: Props): JSX.Element => (
  <ThemedLink {...props} />
);

export default Link;
