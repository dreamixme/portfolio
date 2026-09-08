'use client';

import React, { type FC, useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import {
  applyMask,
  formatWithCommas,
  sanitizeCardPaste,
  stripToDigits,
  useDebouncedValue,
} from '@/utils/inputUtilities';
import { convertPersianNumbersToEnglish } from '@/utils/validation';

import type { BaseInputProps } from './type';

/* ------------------------- Styled Components ------------------------- */

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'showMaxLength' && prop !== 'noMarginBottom',
})<{ showMaxLength?: boolean; noMarginBottom: boolean }>(({
  noMarginBottom,
  showMaxLength,
  theme,
}) => {
  return {
    width: '100%',
    marginBottom: noMarginBottom ? 0 : showMaxLength ? '1rem' : '2rem',
    '& .MuiFormLabel-root': {
      top: '-0.125rem',
      right: '0.875rem',
      left: 'auto',
      fontSize: '0.75rem',
      padding: '0',
      backgroundColor: theme.vars.palette.background.paper,
      color: theme.vars.palette.text.secondary,
      textAlign: 'right',
      transform: 'translate(0, 0.75rem) scale(1)',
      transformOrigin: 'top right',

      '&.MuiInputLabel-shrink': {
        top: '-0.1rem',
        padding: '0 0.5rem',
        transform: 'translate(0, -0.5rem) scale(0.75)',
        transformOrigin: 'top right',
      },
    },

    '& .MuiInputBase-input': {
      position: 'relative',
      top: '0',
      color: theme.vars.palette.text.primary,

      '&::placeholder': {
        color: theme.vars.palette.text.secondary,
      },
    },

    '& fieldset': {
      '& legend': {
        display: 'none !important',
      },
    },

    '& .MuiFormHelperText-root': {
      margin: '0.25rem 0.5rem 0 0',
      position: 'absolute',
      bottom: '-1.25rem',
      fontSize: '0.625rem',
    },
  };
});

// Adjusts adornment icons (e.g., prefix/suffix icons)
const InputAdornmentStyled = styled(InputAdornment)(() => {
  return {
    marginBottom: '0.5rem',
    '& img': {
      width: '1rem',
      height: '1rem',
    },
  };
});

// Displays maxLength indicator under input
const MaxLengthStyled = styled(Box)(() => {
  return {
    position: 'absolute',
    bottom: -4,
    left: 8,
    fontSize: '0.625rem',
    whiteSpace: 'nowrap',
  };
});

// Wraps field to create extra bottom space if maxLength counter is shown
const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'showMaxLength',
})<{ showMaxLength?: boolean }>(({ showMaxLength }) => {
  return {
    position: 'relative',
    width: '100%',
    marginBottom: showMaxLength ? '.5rem !important' : 0,
  };
});

/* ------------------------- Component ------------------------- */

const BaseInput: FC<BaseInputProps> = ({
  value: controlledValue,
  onChange,
  label,
  placeholder,
  disabled,
  formatText,
  validation,
  validationMode = 'onchange',
  debounceMs = 500,
  variant = 'outlined',
  fullWidth = true,
  helperText,
  inputProps,
  textFieldProps,
  startIcon,
  endIcon,
  maxLength,
  error = false,
  autoFocus = false,
  showMaxLength = false,
  noMarginBottom = false,
  numeric = false, // new: only digits allowed
  showThousandsSeparator = false, // new for Price
  onEnter,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [uncontrolledValue, setUncontrolledValue] = useState<string>(() => {
    if (controlledValue == null) return '';
    return numeric ? stripToDigits(String(controlledValue)) : String(controlledValue);
  });
  const rawDigits =
    controlledValue == null
      ? uncontrolledValue
      : numeric
        ? stripToDigits(String(controlledValue))
        : String(controlledValue);

  /** Validation logic (supports debounced or instant mode) */
  const debounced = useDebouncedValue(rawDigits, debounceMs);
  const validationTarget = validationMode === 'debounce' ? debounced : rawDigits;
  const errorMessage = useMemo(() => {
    if (!validation) return undefined;
    const pureValue = formatText ? stripToDigits(validationTarget) : validationTarget;

    // skip validation until full mask filled
    if (formatText) {
      const expectedLength = (formatText.match(/#/g) || []).length;
      if (pureValue.length < expectedLength) return undefined;
    }

    if (!pureValue || pureValue.length < 3) return undefined;

    return validation(pureValue);
  }, [validation, validationTarget, formatText]);

  /** Compute displayed value (masked, comma-separated, or raw) */
  const displayValue = useMemo(() => {
    if (formatText) {
      if (!rawDigits) return '';

      const masked = applyMask(rawDigits, formatText);

      const onlyFormatChars = /^[-_\s.,/*]+$/.test(masked);
      return onlyFormatChars ? '' : masked;
    }

    if (showThousandsSeparator) {
      return formatWithCommas(rawDigits);
    }

    return rawDigits;
  }, [rawDigits, formatText, showThousandsSeparator]);

  // helper to emit onChange with raw digits (no separators)
  const emitChange = (nextRawDigits: string) => {
    if (controlledValue == null) {
      setUncontrolledValue(nextRawDigits);
    }
    onChange?.(nextRawDigits);
  };

  /** Prevent invalid keys in numeric mode */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.();
      return;
    }

    if (!numeric) return;
    // allow navigation keys, backspace, delete, tab, arrows, home/end, ctrl/cmd combos
    const allowed =
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'Tab' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'Home' ||
      e.key === 'End' ||
      e.ctrlKey ||
      e.metaKey; // allow copy/paste/select all shortcuts

    if (allowed) return;

    // allow digits 0-9 from keyboard
    const isDigit = /^[0-9\u06F0-\u06F9\u0660-\u0669]$/.test(e.key);
    if (!isDigit) {
      e.preventDefault();
    }
  };

  /** Handle paste events, sanitize numeric content */
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    // Only special-case when formatText corresponds to PAN (or numeric + maxLength 16)
    if (
      formatText &&
      formatText.includes('#') &&
      (maxLength === 16 || /[#]{16}/.test(formatText))
    ) {
      e.preventDefault();
      const pasted = e.clipboardData.getData('Text') || '';
      const digits = sanitizeCardPaste(pasted);
      if (!digits) return;

      // update internal state and notify parent with raw digits
      emitChange(digits); // emitChange calls setRawDigits and onChange

      // move caret to end (optional)
      setTimeout(() => {
        const el = document.activeElement as HTMLInputElement | null;
        if (el) {
          el.selectionStart = el.selectionEnd = el.value.length;
        }
      }, 0);

      return;
    }

    // fallback generic paste handling for numeric: keep digits only
    if (numeric) {
      e.preventDefault();
      const pasted = e.clipboardData.getData('Text') || '';
      const normalized = convertPersianNumbersToEnglish(pasted);
      const digits = stripToDigits(normalized).slice(0, maxLength ?? Infinity);
      emitChange(digits);
    }
  };

  // On change: we get a formatted display from user (could include separators). Normalize to digits
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputType = (e.nativeEvent as InputEvent).inputType;
    let raw = e.target.value;

    raw = convertPersianNumbersToEnglish(raw);
    const digitsOnly = stripToDigits(raw);
    const truncated = maxLength ? digitsOnly.slice(0, maxLength) : digitsOnly;

    if (formatText) {
      if (inputType === 'deleteContentBackward' || inputType === 'deleteContentForward') {
        const oldMasked = applyMask(rawDigits, formatText);
        const newMasked = e.target.value;
        if (oldMasked.length > newMasked.length) {
          const deletedChar = oldMasked[newMasked.length];
          if (deletedChar === '-' && rawDigits.length > 0) {
            emitChange(rawDigits.slice(0, -1));
            return;
          }
        }
        emitChange(truncated);
        return;
      }

      emitChange(truncated);
      return;
    }

    if (numeric) {
      emitChange(truncated);
      return;
    }

    const next = maxLength ? raw.slice(0, maxLength) : raw;
    emitChange(next);
  };

  /* ------------------------- Render ------------------------- */
  return (
    <Container showMaxLength={showMaxLength}>
      <StyledTextField
        {...textFieldProps}
        showMaxLength={showMaxLength}
        noMarginBottom={noMarginBottom}
        variant={variant}
        fullWidth={fullWidth}
        label={label}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        value={displayValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        error={!!errorMessage || error}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          onBlur?.();
        }}
        helperText={errorMessage ?? helperText}
        slotProps={{
          htmlInput: {
            ...inputProps,
            inputMode: numeric ? 'numeric' : (inputProps?.inputMode ?? 'text'),
            maxLength: formatText ? undefined : maxLength,
          },
          inputLabel: {
            shrink: startIcon ? true : isFocused || Boolean(displayValue?.trim()),
          },
          input: {
            startAdornment: startIcon ? (
              <InputAdornmentStyled position="start">{startIcon}</InputAdornmentStyled>
            ) : undefined,
            endAdornment: endIcon ? (
              <InputAdornmentStyled position="end">{endIcon}</InputAdornmentStyled>
            ) : undefined,
          },
        }}
      />
      {showMaxLength && Number(maxLength) > 0 && (
        <MaxLengthStyled>
          {`${numeric ? rawDigits.length : String(rawDigits || '').length}/${maxLength}`}
        </MaxLengthStyled>
      )}
    </Container>
  );
};

export default BaseInput;
