import * as React from 'react';
import {
  ButtonDanger,
  ButtonDark,
  ButtonLight,
  ButtonSecondary,
  ButtonSuccess
} from '@ions/button/themes';
import { assertUnreachable } from '@utility/helpers';

// Downside: Docz will display all props including React.ButtonHTMLAttributes ones
// https://github.com/doczjs/docz/issues/895
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button's nature
   */
  nature: 'danger' | 'secondary' | 'dark' | 'light' | 'success';
  /**
   * Specifies if the button style should be with background (contained) or transparent (text)
   * @default contained
   */
  variant?: 'contained' | 'text';
  /**
   * Disabled state of the button
   * @default false
   */
  disabled?: boolean;
  /**
   * A large style option
   @default false
   */
  large?: boolean;
}

const Button: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element | null => {
  const renderButtonByType = ({
    nature,
    ...props
  }: Props): JSX.Element | null => {
    switch (nature) {
      case 'danger':
        return <ButtonDanger {...props} />;
      case 'secondary':
        return <ButtonSecondary {...props} />;
      case 'dark':
        return <ButtonDark {...props} />;
      case 'light':
        return <ButtonLight {...props} />;
      case 'success':
        return <ButtonSuccess {...props} />;
      default:
        return assertUnreachable(nature);
    }
  };

  return renderButtonByType(props);
};

export default Button;
