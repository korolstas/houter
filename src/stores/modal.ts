import { makeAutoObservable } from "mobx";

type Modal = "show_propeties";

export class ModalStore {
  modalType: Modal | null = null;
  modalTitle: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setModal = (type: Modal | null, title: string | null) => {
    this.modalType = type;
    this.modalTitle = title;
  };
}
