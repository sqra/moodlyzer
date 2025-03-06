import SENTIMENTS_MAP from '../constants/sentimentMap';
import {
  SentimentResults,
  SentimentScore,
  SentimentLabel,
  SentimentResultsType,
} from '../types';

const sentimentMap: Record<SentimentResultsType, SentimentResults> =
  SENTIMENTS_MAP;

export const useSentimentAnalysis = (
  data: SentimentScore[]
): SentimentResults => {
  if (!data || data.length === 0) {
    return sentimentMap.NEUTRAL;
  }

  const positiveScore =
    data.find((item) => item.label === SentimentLabel.POSITIVE)?.score || 0;
  const negativeScore =
    data.find((item) => item.label === SentimentLabel.NEGATIVE)?.score || 0;

  const scoreDiff = positiveScore - negativeScore;

  if (scoreDiff >= 0.5) {
    return sentimentMap.VERY_POSITIVE;
  } else if (scoreDiff > 0.1) {
    return sentimentMap.POSITIVE;
  } else if (scoreDiff <= -0.5) {
    return sentimentMap.VERY_NEGATIVE;
  } else if (scoreDiff < -0.1) {
    return sentimentMap.NEGATIVE;
  } else {
    return sentimentMap.NEUTRAL;
  }
};
