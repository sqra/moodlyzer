import { SentimentScore } from '../types';

const API_URL = import.meta.env.VITE_HUGGING_FACE_API_URL;
const API_TOKEN = import.meta.env.VITE_HUGGING_FACE_API_TOKEN;

const handleResponse = async (
  response: Response
): Promise<SentimentScore[]> => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something goes wrong');
  }

  return data[0];
};

export const postSentimentAction = async (
  text: string
): Promise<SentimentScore[]> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: text,
    }),
  });

  return handleResponse(response);
};
