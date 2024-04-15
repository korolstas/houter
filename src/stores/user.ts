import { makeAutoObservable } from "mobx";

import { User } from "@types";

export class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User) => {
    this.user = user;
  };

  setImageUrl = (imgUrl: string) => {
    this.user ? (this.user.imgUrl = imgUrl) : null;
  };

  clearUser = () => {
    this.user = null;
  };
}
