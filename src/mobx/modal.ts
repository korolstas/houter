import { makeAutoObservable } from "mobx";

type Modal = "login";

export class ModalStore {
  modalProps: Modal | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setModalProps = (type: Modal | null) => {
    this.modalProps = type;
  };
}
