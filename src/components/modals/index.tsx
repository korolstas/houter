import { observer } from "mobx-react-lite";
import { Modal as AntdModal } from "antd";

import { useStore } from "@stores";

import "./modal.scss";

const ModalComponent = () => {
  const { modalStore } = useStore();
  const { modalType, modalTitle, setModal } = modalStore;

  const getModalElement = () => {
    switch (modalType) {
      case "show_propeties":
        return <></>;
      default:
        return null;
    }
  };

  return (
    <AntdModal
      title={modalTitle}
      open={!!modalType}
      onOk={() => setModal(null, null)}
      onCancel={() => setModal(null, null)}
    >
      {getModalElement()}
    </AntdModal>
  );
};

export const Modal = observer(ModalComponent);
