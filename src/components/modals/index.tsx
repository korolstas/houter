import { observer } from "mobx-react-lite";

import { useStore } from "@stores";

import "./modal.scss";

import { Login } from "./variants";

const ModalComponent = () => {
  const { modalStore } = useStore();
  const { modalType, setModalType } = modalStore;

  const getModalElement = () => {
    switch (modalType) {
      case "login":
        return <Login />;
      default:
        return null;
    }
  };

  return (
    <div className={`modal_container ${modalType ? "active" : null}`}>
      <div className="modal">
        <button onClick={() => setModalType(null)} className="modal_close" />
        {getModalElement()}
      </div>
    </div>
  );
};

export const Modal = observer(ModalComponent);
