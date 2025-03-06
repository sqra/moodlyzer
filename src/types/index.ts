export enum SentimentLabel {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
}

export interface SentimentScore {
  label: SentimentLabel;
  score: number;
}

export interface FormValues {
  sentimentInput: FormDataEntryValue | null;
}

export interface FormErrors {
  sentimentInput?: string;
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
