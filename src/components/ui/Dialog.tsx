import React from 'react';
import styles from './Dialog.module.scss';
import closeIcon from '../../assets/images/close.svg';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialog}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>
        <div className={styles.dialogContent}>{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
