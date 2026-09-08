import { validateIranianMobile } from '@/utils/validators/auth';

export const defaultNumberValidator = (value: string): string | undefined => {
  if (!value) return undefined;
  if (!/^\d+$/.test(value)) return 'لطفا عدد وارد کنید';
  return undefined;
};

export const defaultMsisdnValidator = (value: string): string | undefined => {
  return validateIranianMobile(value) || undefined;
};

export function defaultNationalCodeValidator(input: string): string | undefined {
  try {
    const keepOnlyNumbers = (text: string): string => {
      const regex = /[0-9]|[۰-۹]|[٠١٢٣٤٥٦٧٨٩]/g;
      const matches = text.match(regex);
      return matches ? matches.join('') : '';
    };

    const convertPersianToEnglish = (text: string): string => {
      const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      return text
        .split('')
        .map((ch) => {
          const pIndex = persianNumbers.indexOf(ch);
          if (pIndex !== -1) return String(pIndex);
          const aIndex = arabicNumbers.indexOf(ch);
          if (aIndex !== -1) return String(aIndex);
          return ch;
        })
        .join('');
    };

    const nationalCode = convertPersianToEnglish(keepOnlyNumbers(input));

    if (!nationalCode || nationalCode.length !== 10) {
      return 'کد ملی باید ۱۰ رقم باشد';
    }

    const invalidCodes = [
      '0000000000',
      '1111111111',
      '2222222222',
      '3333333333',
      '4444444444',
      '5555555555',
      '6666666666',
      '7777777777',
      '8888888888',
      '9999999999',
    ];
    if (invalidCodes.includes(nationalCode)) {
      return 'کد ملی نامعتبر است';
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(nationalCode[i], 10) * (10 - i);
    }
    const remainder = sum % 11;
    const checkDigit = parseInt(nationalCode[9], 10);

    const isValid =
      (remainder < 2 && checkDigit === remainder) ||
      (remainder >= 2 && checkDigit + remainder === 11);

    return isValid ? undefined : 'کد ملی نامعتبر است';
  } catch {
    return 'کد ملی نامعتبر است';
  }
}
