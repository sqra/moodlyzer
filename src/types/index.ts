export enum SentimentLabel {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
}

export interface SentimentScore {
  label: SentimentLabel;
  score: number;
}

export interface SentimentResults {
  emoji: string;
  description: string;
  tip: string;
}

export type SentimentResultsType =
  | 'VERY_POSITIVE'
  | 'POSITIVE'
  | 'NEUTRAL'
  | 'NEGATIVE'
  | 'VERY_NEGATIVE';

export interface SubmitFormResponse {
  status: string;
  message: string;
  data: SentimentScore[] | null;
}
