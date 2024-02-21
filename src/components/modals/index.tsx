import { observer } from "mobx-react-lite";

import { useStore } from "@mobx";

import "./modal.scss";

import { Login } from "./variants";

const ModalComponent = () => {
  const { modalStore } = useStore();
  const { modalProps, setModalProps } = modalStore;

  const getModalElement = () => {
    switch (modalProps) {
      case "login":
        return <Login />;
      default:
        return null;
    }
  };

  return (
    <div className={`modal_container ${modalProps ? "active" : null}`}>
      <div className="modal">
        <button onClick={() => setModalProps(null)} className="modal_close" />
        {getModalElement()}
      </div>
    </div>
  );
};

export const Modal = observer(ModalComponent);
