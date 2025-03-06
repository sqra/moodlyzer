import { describe, it, expect } from 'vitest';
import { useSentimentAnalysis } from './useSentimentAnalysis';
import { SentimentScore, SentimentLabel } from '../types';
import SENTIMENTS_MAP from '../constants/sentimentMap';

describe('useSentimentAnalysis', () => {
  it('should return VERY_POSITIVE when positive score is much higher than negative score', () => {
    const data: SentimentScore[] = [
      { label: SentimentLabel.POSITIVE, score: 0.8 },
      { label: SentimentLabel.NEGATIVE, score: 0.2 },
    ];
    const result = useSentimentAnalysis(data);
    expect(result).toEqual(SENTIMENTS_MAP.VERY_POSITIVE);
  });

  it('should return POSITIVE when positive score is slightly higher than negative score', () => {
    const data: SentimentScore[] = [
      { label: SentimentLabel.POSITIVE, score: 0.6 },
      { label: SentimentLabel.NEGATIVE, score: 0.4 },
    ];
    const result = useSentimentAnalysis(data);
    expect(result).toEqual(SENTIMENTS_MAP.POSITIVE);
  });

  it('should return VERY_NEGATIVE when negative score is much higher than positive score', () => {
    const data: SentimentScore[] = [
      { label: SentimentLabel.POSITIVE, score: 0.2 },
      { label: SentimentLabel.NEGATIVE, score: 0.8 },
    ];
    const result = useSentimentAnalysis(data);
    expect(result).toEqual(SENTIMENTS_MAP.VERY_NEGATIVE);
  });

  it('should return NEGATIVE when negative score is slightly higher than positive score', () => {
    const data: SentimentScore[] = [
      { label: SentimentLabel.POSITIVE, score: 0.4 },
      { label: SentimentLabel.NEGATIVE, score: 0.6 },
    ];
    const result = useSentimentAnalysis(data);
    expect(result).toEqual(SENTIMENTS_MAP.NEGATIVE);
  });

  it('should return NEUTRAL when positive and negative scores are close', () => {
    const data: SentimentScore[] = [
      { label: SentimentLabel.POSITIVE, score: 0.5 },
      { label: SentimentLabel.NEGATIVE, score: 0.5 },
    ];
    const result = useSentimentAnalysis(data);
    expect(result).toEqual(SENTIMENTS_MAP.NEUTRAL);
  });
});
