import { makeAutoObservable } from "mobx";

type User = {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  imgUrl?: string;
  phone?: string;
  birthday?: string;
  location?: string;
};

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
