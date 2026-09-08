/**
 * Utility helpers for formatted inputs (credit card, numeric fields, etc.)
 * Includes masking, digit extraction, debouncing, number formatting, and bank detection.
 */

import { useEffect, useState } from 'react';

import { convertPersianNumbersToEnglish } from '@/utils/validation';

/**
 * Apply a visual mask pattern (e.g. ####-####-####-####) to a string of digits.
 * Inserts separator characters (like '-') only when enough digits are entered.
 *
 * @param rawDigits - The plain numeric string (unformatted)
 * @param mask - The mask pattern using '#' for digits and symbols (e.g. "-") as separators
 * @returns Masked string formatted according to the provided mask
 *
 * Example:
 * ```ts
 * applyMask("5047061900293917", "####-####-####-####") // "5047-0619-0029-3917"
 * ```
 */

const applyMask = (rawDigits: string, mask?: string) => {
  if (!mask) return rawDigits;
  const out: string[] = [];
  let di = 0;

  for (let i = 0; i < mask.length; i++) {
    const ch = mask[i];
    if (ch === '#') {
      // Replace placeholders with actual digits
      if (di < rawDigits.length) {
        out.push(rawDigits[di++]);
      } else {
        break; // stop when digits run out
      }
    } else {
      // Add separator characters only after the first group has started
      if (di > 0 && di < rawDigits.length) {
        out.push(ch);
      }
    }
  }

  return out.join('');
};

/**
 * Removes all non-digit characters from a string (including Persian/Arabic digits).
 * Converts Persian/Arabic numbers to English digits before stripping.
 *
 * @param value - Any string possibly containing numbers and symbols
 * @param acceptMask
 * @returns Digits-only string
 *
 * Example:
 * ```ts
 * stripToDigits("۵۰۴۷-۰۶۱۹ ۰۰۲۹.۳۹۱۷") // "5047061900293917"
 * stripToDigits("۵۰۴۷-۰۶** ****.**۱۷") // "504706********17"
 * ```
 */

const stripToDigits = (value: string, acceptMask?: boolean): string => {
  if (!value) return '';
  const english = convertPersianNumbersToEnglish(value);
  if (acceptMask) {
    return english.replace(/[^\d*]/g, '');
  }
  return english.replace(/\D/g, '');
};

/**
 * React hook that debounces a value update.
 * Useful for delaying validation or API calls until the user stops typing.
 *
 * @param value - Current value to debounce
 * @param delay - Milliseconds to wait before applying the update
 * @returns The debounced value
 *
 * Example:
 * ```ts
 * const debouncedSearch = useDebouncedValue(searchTerm, 500);
 * ```
 */

function useDebouncedValue<T>(value: T, delay: number) {
  const [deb, setDeb] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDeb(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return deb;
}

/**
 * Formats a plain numeric string by inserting comma separators every three digits.
 * Preserves negative sign and leading zeros.
 *
 * @param rawDigits - Numeric string (may include '-')
 * @returns Comma-separated string (e.g. "1,234,567")
 *
 * Example:
 * ```ts
 * formatWithCommas("1234567") // "1,234,567"
 * ```
 */

const formatWithCommas = (rawDigits: string) => {
  if (!rawDigits) return '';
  const negative = rawDigits.startsWith('-');
  const s = negative ? rawDigits.slice(1) : rawDigits;
  const parts: string[] = [];
  for (let i = s.length; i > 0; i -= 3) {
    const start = Math.max(0, i - 3);
    parts.unshift(s.slice(start, i));
  }
  return (negative ? '-' : '') + parts.join(',');
};

/**
 * Sanitizes pasted credit card input:
 * - Trims whitespace
 * - Converts Persian/Arabic digits to English
 * - Removes all non-digit separators (spaces, commas, dashes, slashes, etc.)
 * - Truncates to 16 digits (standard PAN length)
 *
 * @param text - Raw pasted content
 * @returns Clean 16-digit card number string
 *
 * Example:
 * ```ts
 * sanitizeCardPaste("5047-0619 0029/3917") // "5047061900293917"
 * ```
 */
const sanitizeCardPaste = (text: string): string => {
  if (!text) return '';

  // 1. trim spaces at ends
  let s = text.trim();

  // 2. convert persian/arabi digits to english
  s = convertPersianNumbersToEnglish(s);

  // 3. remove ANY character that is not a digit
  // this will handle -, space, _, ., ,, /, *, etc.
  const digitsOnly = s.replace(/\D+/g, '');

  // 4. optionally: restrict length to 16 (PAN)
  return digitsOnly.slice(0, 16);
};

export { applyMask, useDebouncedValue, stripToDigits, formatWithCommas, sanitizeCardPaste };
