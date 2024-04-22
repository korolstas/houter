import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

import { User } from "@types";

export class UserStore {
  user: User | null = null;
  isLoading: boolean = false;
  menuType: string = "";
  cards: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User) => {
    this.user = user;
  };

  setMenuType = (menuType: string) => {
    this.menuType = menuType;
  };

  setImageUrl = (imgUrl: string) => {
    this.user ? (this.user.imgUrl = imgUrl) : null;
  };

  clearUser = () => {
    this.user = null;
  };

  fetchRegister = async ({
    firstName,
    lastName,
    email,
    password,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    this.isLoading = true;

    const data = {
      firstName,
      password,
      lastName,
      email,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:7005/auth/signup",
        data
      );

      runInAction(() => {
        const result = response.data;

        if (result.msg && this.user) {
          this.user.id = result.msg;

          this.user.firstName = firstName;
          this.user.lastName = lastName;
          this.user.email = email;
          this.isLoading = false;
        }
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  fetchAuth = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    this.isLoading = true;

    const data = {
      password,
      email,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:7005/auth/login",
        data
      );

      runInAction(() => {
        const result = response.data;

        if (result.msg) {
          const user = {
            id: result.msg.client_id,
            firstName: result.msg.first_name,
            lastName: result.msg.last_name,
            email: result.msg.email,
          };

          this.user = user;

          this.isLoading = false;
        }
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  createCard = async ({
    // image,
    price,
    title,
    realty,
    rent,
    location,
    description,
  }: {
    // image: string;
    price: number;
    title: string;
    realty: string;
    rent: string;
    location: string | null;
    description?: string;
  }) => {
    this.isLoading = true;

    const data = {
      id: this.user?.id,
      price: Number(price),
      title,
      realty,
      rent,
      location,
      description,
      // image,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:7005/property/ad/create",
        data
      );

      runInAction(() => {
        const result = response.data;

        if (result.msg) {
          this.isLoading = false;
        }
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  getCards = async () => {
    this.isLoading = true;

    try {
      const response = await axios.get("http://127.0.0.1:7005/property/ads");

      runInAction(() => {
        const result = response.data;
        const data = result.msg;
        this.cards = data;
        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  showCard = async () => {
    this.isLoading = true;

    try {
      const response = await axios.get("http://127.0.0.1:7005/property/ads");

      runInAction(() => {
        const result = response.data;
        const data = result.msg;
        this.cards = data;
        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };
}
