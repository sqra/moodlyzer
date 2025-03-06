import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
  maxlength?: number;
  disabled?: boolean;
  error?: string;
  autofocus?: boolean;
  reset?: () => void;
}

export default function Input({
  name,
  id = name,
  type = 'text',
  placeholder,
  maxlength = 100,
  disabled = false,
  error,
  autofocus = false,

  reset,
}: InputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [characters, setCharacters] = useState<number>(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setCharacters(e.target.value.length);
  };

  useEffect(() => {
    if (reset) {
      setInputValue('');
      setCharacters(0);
    }
  }, [reset]);

  return (
    <fieldset className={styles.fieldset}>
      <input
        className={styles.input}
        name={name}
        autoComplete="off"
        id={id}
        type={type}
        disabled={disabled}
        maxLength={maxlength}
        onChange={(e) => handleOnChange(e)}
        placeholder={placeholder}
        value={inputValue}
        autoFocus={autofocus}
      />
      <span className={styles.lengthInfo}>
        {characters}/{maxlength}
      </span>
      {error && <p className={styles.error}>{error}</p>}
    </fieldset>
  );
}
