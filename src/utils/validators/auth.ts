import { convertPersianNumbersToEnglish } from '@/utils/validation';

export function validateIranianMobile(value: string) {
  const mobile = convertPersianNumbersToEnglish(value).replace(/\D/g, '');

  if (!mobile) return undefined;
  return /^09\d{9}$/.test(mobile) ? undefined : 'شماره موبایل معتبر نیست.';
}
