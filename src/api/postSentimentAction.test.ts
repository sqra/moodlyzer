import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { postSentimentAction } from './postSentimentAction';
import { SentimentScore } from '../types';

const API_URL = import.meta.env.VITE_HUGGING_FACE_API_URL;

const server = setupServer(
  http.post(API_URL, () => {
    return HttpResponse.json([
      [
        {
          label: 'POSITIVE',
          score: 0.9998766183853149,
        },
        {
          label: 'NEGATIVE',
          score: 0.0001233390357811004,
        },
      ],
    ]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('postSentimentAction', () => {
  it('should return sentiment scores when API call is successful', async () => {
    const text = 'Today is a good day';
    const result: SentimentScore[] = await postSentimentAction(text);

    expect(result).toEqual([
      {
        label: 'POSITIVE',
        score: 0.9998766183853149,
      },
      {
        label: 'NEGATIVE',
        score: 0.0001233390357811004,
      },
    ]);
  });

  it('should throw an error when API call fails', async () => {
    server.use(
      http.post(API_URL, () => {
        return HttpResponse.json(
          {
            message: 'Internal Server Error',
          },
          { status: 500 }
        );
      })
    );

    const text = 'I am happy';

    await expect(postSentimentAction(text)).rejects.toThrow(
      "It's not a bug, it's a surprise feature! 😎"
    );
  });

  it('should throw an error when API call fails with 503 status', async () => {
    server.use(
      http.post(API_URL, () => {
        return HttpResponse.json(
          {
            message: 'Service Unavailable',
          },
          { status: 503 }
        );
      })
    );

    const text = 'I am happy';

    await expect(postSentimentAction(text)).rejects.toThrow(
      "It's not a bug, it's a surprise feature! 😎"
    );
  });
});
