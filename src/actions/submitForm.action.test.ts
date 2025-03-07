import { describe, it, expect, vi, Mock } from 'vitest';
import { submitFormAction } from './submitForm.action';
import { postSentimentAction } from '../api/postSentimentAction';

vi.mock('../api/postSentimentAction', () => ({
  postSentimentAction: vi.fn(),
}));

describe('submitFormAction', () => {
  it('should return an error if sentiment is not provided', async () => {
    const formData = new FormData();
    const result = await submitFormAction(null, formData);

    expect(result).toEqual({
      status: 'error',
      message: 'Please enter a sentiment',
      data: null,
    });
  });

  it('should return success if sentiment is provided and API call is successful', async () => {
    const formData = new FormData();
    formData.set('sentiment-input', 'test sentiment');

    (postSentimentAction as Mock).mockResolvedValueOnce({
      sentiment: 'positive',
    });

    const result = await submitFormAction(null, formData);

    expect(result).toEqual({
      status: 'success',
      message: 'Sentiment submitted',
      data: { sentiment: 'positive' },
    });
  });

  it('should throw an error if API call fails', async () => {
    const formData = new FormData();
    formData.set('sentiment-input', 'test sentiment');

    (postSentimentAction as Mock).mockRejectedValueOnce(new Error('API error'));

    await expect(submitFormAction(null, formData)).rejects.toThrow('API error');
  });
});
