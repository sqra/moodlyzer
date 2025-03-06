import styles from './Button.module.scss';
import Loader from './Loader';

export type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type: ButtonType;
  name?: string;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  name,
  isLoading,
  disabled,
  type,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      className={`${styles.button} ${className}`}
      disabled={disabled}
    >
      {isLoading ? <Loader /> : 'Analyze'}
    </button>
  );
}
