import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import Form from './Form';
import styles from './MainContent.module.scss';
import face from '@/assets/images/face.svg';

const MainContent: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.face}>
        <img src={face} alt="" />
      </div>
      <h1 className={styles.paragraph}>
        Share your thoughts – <strong>type something</strong>, and we'll analyze
        the sentiment of your text!
      </h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Form />
      </ErrorBoundary>
    </div>
  );
};

export default MainContent;
