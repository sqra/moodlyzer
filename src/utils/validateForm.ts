import { FormValues, FormErrors } from '../types';

export const validateForm = (data: FormValues): FormErrors => {
  let errors: FormErrors = {};
  if (!data.sentimentInput) {
    errors.sentimentInput = 'Please type something';
  }
  return errors;
};
