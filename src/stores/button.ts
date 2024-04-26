import { makeAutoObservable } from "mobx";

export class ButtonStore {
  bttnType: string = "House";
  menuType: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setBttnType = (type: string) => {
    this.bttnType = type;
  };

  setMenuType = (menuType: string) => {
    this.menuType = menuType;
  };
}
