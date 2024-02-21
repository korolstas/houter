import { makeAutoObservable } from "mobx";

export class UserStore {
  user: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: any) => {
    this.user = user;
  };
}
