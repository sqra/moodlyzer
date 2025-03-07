import { FallbackProps } from 'react-error-boundary';
import Button from './ui/Button';
import styles from './ErrorFallback.module.scss';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h2>Upsss... something went wrong</h2>
      <p className={styles.paragraph}>{error.message}</p>
      <Button onClick={resetErrorBoundary}>Click here to try again</Button>
    </div>
  );
}

export default ErrorFallback;
