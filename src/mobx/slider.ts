import { makeAutoObservable } from "mobx";

export class SliderStore {
  bttnProps: string = "House";

  constructor() {
    makeAutoObservable(this);
  }

  setBttnProps = (type: string) => {
    this.bttnProps = type;
  };
}
