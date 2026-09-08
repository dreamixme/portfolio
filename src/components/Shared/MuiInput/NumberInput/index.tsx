import type { FC } from 'react';

import MuiBaseInput from '@/components/Shared/MuiInput/BasicInput';
import type { NumberInputProps } from '@/components/Shared/MuiInput/BasicInput/type';
import { defaultNumberValidator } from '@/utils/inputvalidators';

const NumberInput: FC<NumberInputProps> = ({ formatText, validation, ...rest }) => {
  return (
    <MuiBaseInput
      {...rest}
      formatText={formatText}
      numeric
      validation={validation ?? defaultNumberValidator}
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
        ...rest.inputProps,
      }}
    />
  );
};

export default NumberInput;
