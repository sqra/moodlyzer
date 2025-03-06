import { SentimentScore } from '../types';
import { useSentimentAnalysis } from '../hooks/useSentimentAnalysis';
import styles from './SentimentResults.module.scss';

const SentimentResults: React.FC<{ data: SentimentScore[] }> = ({ data }) => {
  const { emoji, description, tip } = useSentimentAnalysis(data);

  return (
    <>
      <div className={`${styles.emoji} ${styles.icon} ${styles[emoji]}`} />
      <div className={styles.description}>{description}</div>
      <div className={styles.tip}>TIP: {tip}</div>
    </>
  );
};

export default SentimentResults;
