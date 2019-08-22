import * as React from 'react';
import BaseButton from '@ions/base';

interface Props {
  title: string;
}

const DisabledButton: React.FunctionComponent<Props> = ({
  title,
  ...props
}): JSX.Element => {
  return (
    <BaseButton {...props} disabled>
      {title}
    </BaseButton>
  );
};

export default DisabledButton;
