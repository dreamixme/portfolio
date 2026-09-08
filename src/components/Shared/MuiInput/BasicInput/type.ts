import type { InputHTMLAttributes, ReactNode } from 'react';

import type { TextFieldProps } from '@mui/material/TextField';

export type ValidationFn = (value: string) => string | undefined;

export type ValidationMode = 'onchange' | 'debounce';

export interface BaseInputProps {
  value?: string;
  onChange?: (v: string) => void;
  label?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  formatText?: string; // e.g. "####-####"
  validation?: ValidationFn;
  validationMode?: ValidationMode;
  debounceMs?: number;
  variant?: TextFieldProps['variant'];
  fullWidth?: boolean;
  error?: boolean;
  helperText?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  textFieldProps?: Partial<TextFieldProps>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  maxLength?: number;
  numeric?: boolean;
  showThousandsSeparator?: boolean;
  showClearIcon?: boolean;
  showMaxLength?: boolean;
  noMarginBottom?: boolean;
  onEnter?: () => void;
  onBlur?: () => void;
}

export type NumberInputProps = BaseInputProps;
export type CommonProps = Partial<BaseInputProps>;
