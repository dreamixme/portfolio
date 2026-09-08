import type { FC } from 'react';

import type { CommonProps } from '@/components/Shared/MuiInput/BasicInput/type';
import NumberInput from '@/components/Shared/MuiInput/NumberInput';
import { defaultNationalCodeValidator } from '@/utils/inputvalidators';

const NationalCodeInput: FC<CommonProps> = (props) => (
  <NumberInput
    {...props}
    validation={props.validation ?? defaultNationalCodeValidator}
    formatText={props.formatText ?? '##########'}
    maxLength={10}
  />
);

export default NationalCodeInput;
