import { makeAutoObservable, runInAction } from "mobx";

import { instance } from "@/api/config";
import { User } from "@types";

import { UserAuthProps } from "./types";

export class UserStore {
  user: User | null | any = null;
  isLoadingUser: boolean = false;
  errorUser: string | null = null;
  cards: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User) => {
    this.user = user;
  };

  clearUser = () => {
    this.user = null;
  };

  fetchRegister = async ({
    firstName,
    lastName,
    password,
    email,
  }: UserAuthProps) => {
    this.isLoadingUser = true;

    const data = {
      firstName,
      lastName,
      password,
      email,
    };

    try {
      const response = await instance.post("/auth/signup", data);

      runInAction(() => {
        const result = response.data;

        if (result.msg) {
          this.user = { id: result.msg, firstName, lastName, email };
          this.isLoadingUser = false;
        }
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };

  fetchAuth = async ({ email, password }: UserAuthProps) => {
    this.isLoadingUser = true;

    const data = {
      password,
      email,
    };

    try {
      const response = await instance.post("/auth/login", data);

      runInAction(() => {
        const result = response.data;

        if (result.msg) {
          const user = result.msg;

          this.user = user;

          this.isLoadingUser = false;
        }
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };

  userProfile = async () => {
    this.isLoadingUser = true;

    try {
      const response = await instance.get(`/profile/${this.user.id}`);

      runInAction(() => {
        const result = response.data;
        const data = {
          id: result.msg.id,
          work: result.msg.work,
          email: result.msg.email,
          phone: result.msg.phone,
          location: result.msg.location,
          lastName: result.msg.lastName,
          firstName: result.msg.firstName,
        };

        this.user = data;
        this.cards = result.msg.card;
        this.isLoadingUser = false;
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };

  updateUser = async (newUser: User) => {
    this.isLoadingUser = true;

    try {
      const response = await instance.patch(`/profile/edit`, newUser);

      runInAction(() => {
        const result = response.data;

        this.isLoadingUser = false;
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };
}
