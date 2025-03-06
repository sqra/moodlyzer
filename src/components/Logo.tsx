import logo from '@/assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="Moodlyzer logo" />
    </a>
  );
};

export default Logo;
