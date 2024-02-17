import { observer } from "mobx-react-lite";

import { useStore } from "@mobx";

import { Login } from "./variants";
import "./modal.scss";

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
