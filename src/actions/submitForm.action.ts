import { postSentimentAction } from '../api/postSentimentAction';
import { SubmitFormResponse } from '../types';

export async function submitFormAction(
  prevData: any,
  data: FormData
): Promise<SubmitFormResponse> {
  const sentiment = data.get('sentiment-input') as string;

  if (!sentiment) {
    return {
      status: 'error',
      message: 'Please enter a sentiment',
      data: null,
    };
  }

  try {
    const result = await postSentimentAction(sentiment);

    return {
      status: 'success',
      message: 'Sentiment submitted',
      data: result,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Failed to submit sentiment');
  }
}
