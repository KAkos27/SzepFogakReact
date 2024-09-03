import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ className, open, onEscape, children }) => {
  const modal = useRef();

  useEffect(() => {
    open ? modal.current.showModal() : modal.current.close();
  }, [open]);

  return createPortal(
    <dialog className={className} ref={modal} onClose={onEscape}>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
