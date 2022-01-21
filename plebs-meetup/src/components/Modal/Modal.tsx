import React from 'react';
import ReactDom from 'react-dom';

interface ModalProps {
  onBackdropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
  return ReactDom.createPortal(
    <div>
      <span>buttons of categories</span>
      <button onClick={onBackdropClick}>cloce</button>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
