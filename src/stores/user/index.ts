import { makeAutoObservable, runInAction } from "mobx";

import { instance } from "@/api/config";
import { User } from "@types";

import { UserAuthProps } from "./types";

export class UserStore {
  user: User | null | any = null;
  isLoadingUser: boolean = false;
  errorUser: string | null = null;
  raiting_comments = [];
  cards: any[] = [];
  favorites = [];
  isAuth = false;
  isRefreshh = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User) => {
    this.user = user;
  };

  clearError = () => {
    this.errorUser = null;
  };

  setIsRefresh = () => {
    this.isRefreshh = false;
  };

  clearUser = () => {
    this.user = null;
    this.isAuth = false;
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
        }
        this.isLoadingUser = false;
      });
      this.isAuth = true;
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

        if (typeof result.msg === "string") {
          this.isAuth = false;
          this.errorUser = result.msg;
        } else {
          const user = result.msg;

          this.user = user;
          this.isAuth = true;
        }
        this.isLoadingUser = false;
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };

  userProfile = async (id: string | number) => {
    this.isLoadingUser = true;

    try {
      const response = await instance.get(`/profile/${id}`);

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
          assessed: result.msg.assessed,
          assessed_count: result.msg.assessed_count,
          average_mark: result.msg.average_mark,
          image: result.msg.image,
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

  updateUserImage = async (file: any) => {
    this.isLoadingUser = true;

    try {
      const response = await instance.post(
        `/property/upload/${this.user.id}`,
        file
      );

      runInAction(() => {
        const result = response.data;

        if (result.message === "File uploaded successfully") {
          this.isLoadingUser = false;
        }
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };

  getFavorites = async () => {
    this.isLoadingUser = true;

    try {
      const response = await instance.get(
        `/property/ad/favorites/${this.user?.id}`
      );

      runInAction(() => {
        const result = response.data;

        this.favorites = result.msg;
        this.isLoadingUser = false;
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };

  postFavorite = async (card_id: number, user_id: number) => {
    this.isLoadingUser = true;

    const data = { card_id, user_id };

    try {
      const response = await instance.post(`/property/ad/favorites`, data);

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

  deleteFavorite = async (id: number) => {
    this.isLoadingUser = true;

    try {
      const response = await instance.delete(`/property/ad/favorites/${id}`);

      runInAction(() => {
        const result = response.data;

        this.isLoadingUser = false;
        this.isRefreshh = true;
      });
    } catch (e: any) {
      this.isLoadingUser = false;
      // this.errorUser = e.response.data.errorUser;
      console.log(e);
    }
  };

  createRate = async (
    assessed_id: string | number,
    description: string,
    mark: number
  ) => {
    this.isLoadingUser = true;

    const data = {
      assessed_id,
      appraiser_id: this.user?.id,
      description,
      mark,
    };

    try {
      const response = await instance.post("profile/add_mark", data);

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

  deleteRate = async (id: string | number) => {
    this.isLoadingUser = true;

    try {
      const response = await instance.delete(`/profile/del_mark/${id}`);

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
