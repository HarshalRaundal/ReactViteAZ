import { createPortal } from "react-dom";

export const CustomModal = ({ header, footer, visible, onHide, children }) => {
  const ModalBody = (
    <div
      className={`fixed bg-black/40 flex items-center justify-center inset-0 ${visible ? "" : "hidden"} `}
      onClick={onHide}
      aria-modal="true"
    >
      <div
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">{header}</div>
        <div className="modal-body max-w-2xl p-4">{children}</div>
        <div className="modal-footer ">{footer}</div>
      </div>
    </div>
  );
  return createPortal(ModalBody, document.getElementById("portal"));
};
