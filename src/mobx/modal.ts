import { makeAutoObservable } from "mobx";

type Modal = "login";

export class ModalStore {
  modalType: Modal | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setModalType = (type: Modal | null) => {
    this.modalType = type;
  };
}
