import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  dismisable?: boolean;
  onClick: () => void;
}

const Alert = ({ children, dismisable = false, onClick }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}{" "}
      {dismisable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClick}
        ></button>
      )}
    </div>
  );
};

export default Alert;
