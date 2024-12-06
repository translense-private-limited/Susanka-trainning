import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
    close() {
      dialog.current?.close();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/50 rounded-md w-full max-w-md p-6 bg-stone-50 shadow-lg"
    >
      <div className="text-stone-800 space-y-4">
        {children}
        <form method="dialog" className="text-right">
          <button
            className="px-4 py-2 text-stone-50 bg-stone-800 rounded-md hover:bg-stone-950"
            onClick={() => dialog.current?.close()}
          >
            {buttonCaption}
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
