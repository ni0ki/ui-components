import * as React from 'react';
import { FunctionComponent } from 'react';

interface Props {
  title?: string;
}

const Button: FunctionComponent<Props> = ({
  title = 'Nothing will happen!'
}: Props): JSX.Element => (
  <button
    style={{
      color: 'white',
      backgroundColor: 'purple',
      padding: '5px',
      borderRadius: '5px',
      cursor: 'pointer'
    }}
  >
    {title}
  </button>
);

export default Button;
