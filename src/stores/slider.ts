import { makeAutoObservable } from "mobx";

export class SliderStore {
  bttnType: string = "House";

  constructor() {
    makeAutoObservable(this);
  }

  setBttnType = (type: string) => {
    this.bttnType = type;
  };
}
