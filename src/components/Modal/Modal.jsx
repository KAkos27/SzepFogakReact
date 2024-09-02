import { useEffect, useRef } from "react";

const Modal = ({ className, open, children }) => {
  const modal = useRef();

  useEffect(() => {
    open ? modal.current.showModal() : modal.current.close();
  }, [open]);

  return (
    <dialog className={className} ref={modal}>
      {children}
    </dialog>
  );
};

export default Modal;
