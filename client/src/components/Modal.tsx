import { FC, HTMLAttributes, ReactNode, useState } from "react";
import { IoIosClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type ModalHeaderProps = {
  children: ReactNode;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className={`fixed  inset-0 bg-black opacity-50 ${
              isClosing ? "transition-opacity" : ""
            }`}
            onClick={handleClose}
          />
          <div
            className={`text-secondary-50 max-w-sm p-0 rounded-md bg-secondary-900 overflow-hidden transform transition-all ${
              isClosing ? "scale-90 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const ModalHeader: FC<ModalHeaderProps> = ({ children, onClose }) => {
  const [, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setIsClosing(false);
    onClose();
  };
  return (
    <div className="mb-4 mt-1 p-2 flex justify-between items-center border-b border-primary-500 ">
      <div className=" text-primary-300 font-semibold">{children}</div>
      <button
        className="ring-primary-500 rounded-sm focus:ring-1"
        onClick={handleClose}
      >
        <IoIosClose className="text-lg text-primary-300" />
      </button>
    </div>
  );
};

const ModalBody: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 text-secondary-100 text-[14px] mx-2 mb-2">
      {children}
    </div>
  );
};

export { Modal, ModalHeader, ModalBody };
