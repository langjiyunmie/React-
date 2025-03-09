import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary d-flex justify-content-between align-items-center">
      <span>{children}</span>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        data-bs-target="#my-alert"
        aria-label="Close"
        onClick={onClose} // 将 onClick 移到按钮上
      ></button>
    </div>
  );
};

export default Alert;