import { SentimentScore } from '../types';
import { useSentimentAnalysis } from '../hooks/useSentimentAnalysis';
import styles from './SentimentResults.module.scss';

export default function SentimentResults({ data }: { data: SentimentScore[] }) {
  const { emoji, description, tip } = useSentimentAnalysis(data);

  return (
    <>
      <div className={`${styles.emoji} ${styles.icon} ${styles[emoji]}`} />
      <div className={styles.description}>{description}</div>
      <div className={styles.tip}>TIP: {tip}</div>
    </>
  );
}
