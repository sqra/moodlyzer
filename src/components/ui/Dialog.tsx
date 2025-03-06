import React, { useEffect, useRef } from 'react';
import styles from './Dialog.module.scss';
import closeIcon from '../../assets/images/close.svg';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      isOpen ? dialog.showModal() : dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <button className={styles.closeButton} onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </button>
      <div className={styles.dialogContent}>{children}</div>
    </dialog>
  );
};

export default Dialog;
