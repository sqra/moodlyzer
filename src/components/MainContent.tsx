import Form from './Form';
import styles from './MainContent.module.scss';
import face from '@/assets/images/face.svg';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.face}>
        <img src={face} alt="" />
      </div>
      <p className={styles.paragraph}>
        Share your thoughts – <strong>type something</strong>, and we'll analyze
        the sentiment of your text!
      </p>
      <Form />
    </div>
  );
}
