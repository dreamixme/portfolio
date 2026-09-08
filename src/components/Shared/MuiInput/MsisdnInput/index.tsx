import type { FC } from 'react';

import type { CommonProps } from '@/components/Shared/MuiInput/BasicInput/type';
import NumberInput from '@/components/Shared/MuiInput/NumberInput';
import { defaultMsisdnValidator } from '@/utils/inputvalidators';

const MsisdnInput: FC<CommonProps> = (props) => (
  <NumberInput {...props} validation={props.validation ?? defaultMsisdnValidator} maxLength={11} />
);

export default MsisdnInput;
