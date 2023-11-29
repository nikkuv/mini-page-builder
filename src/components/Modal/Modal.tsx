import React, { ReactNode } from 'react';
import styles from '@/styles/Modal.module.css';

// Define a type for the props
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode; 
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseButton} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
