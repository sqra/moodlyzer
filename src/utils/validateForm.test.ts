import { describe, it, expect } from 'vitest';
import { validateForm } from './validateForm';
import { FormValues, FormErrors } from '../types';

describe('validateForm', () => {
  it('should return an error if sentimentInput is empty', () => {
    const data: FormValues = { sentimentInput: '' };
    const expectedErrors: FormErrors = {
      sentimentInput: 'Please type something',
    };
    expect(validateForm(data)).toEqual(expectedErrors);
  });

  it('should return no errors if sentimentInput is provided', () => {
    const data: FormValues = { sentimentInput: 'I am happy' };
    const expectedErrors: FormErrors = {};
    expect(validateForm(data)).toEqual(expectedErrors);
  });
});
