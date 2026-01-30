import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    },
    close() {
      if (dialogRef.current?.open) {
        dialogRef.current.close();
      }
    },
  }));

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
