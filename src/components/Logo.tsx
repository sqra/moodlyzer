import logo from '@/assets/images/logo.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="Moodlyzer logo" />
    </a>
  );
}
