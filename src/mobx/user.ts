import { makeAutoObservable } from "mobx";

type User = {
  firstName: string;
  lastName: string;
  id: string | number;
};

export class UserStore {
  user: User | null = null;
  // user: User | null = {
  //   firstName: "Admin",
  //   lastName: "Stas",
  //   id: 111,
  // };

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User) => {
    this.user = user;
  };

  clearUser = () => {
    this.user = null;
  };
}
