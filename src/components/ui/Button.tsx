import styles from './Button.module.scss';
import Loader from './Loader';

export type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  name?: string;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = function ({
  children,
  type = 'button',
  name,
  isLoading,
  disabled,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
