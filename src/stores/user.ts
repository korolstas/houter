import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

import { User } from "@types";

export class UserStore {
  user: User | null | any = null;
  isLoading: boolean = false;
  menuType: string = "";
  cards: any[] = [];
  card: any = {};

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

      console.log(response.data);

      runInAction(() => {
        const result = response.data;

        if (result.msg) {
          this.user = { id: result.msg, firstName, lastName, email };
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
          const user = result.msg;

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
    file,
    price,
    title,
    realty,
    rent,
    location,
    description,
  }: {
    file: any;
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
    };

    try {
      const response1 = await axios.post(
        "http://127.0.0.1:7005/property/ad/create",
        data
      );

      runInAction(() => {
        const result = response1.data;

        if (result.msg) {
          this.isLoading = false;
        }
      });

      const response2 = await axios.post(
        `http://127.0.0.1:7005/property/ad/upload/${response1.data.msg}`,
        file
      );

      runInAction(() => {
        const result = response2.data;

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

  showCard = async ({ id }: { id: number }) => {
    this.isLoading = true;

    try {
      const response = await axios.get(
        `http://127.0.0.1:7005/property/ad/show/${id}`
      );
      console.log("card", response);

      runInAction(() => {
        const result = response.data;
        this.card = result.msg;
        this.isLoading = false;
      });

      const response2 = await axios.get(
        `http://127.0.0.1:7005/profile/${response.data.msg.user.id}`
      );

      console.log("card.user", response2);

      runInAction(() => {
        const result = response2.data;
        this.card.user = result.msg;
        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  userProfile = async () => {
    this.isLoading = true;

    try {
      const response = await axios.get(
        `http://127.0.0.1:7005/profile/${this.user.id}`
      );

      runInAction(() => {
        const result = response.data;
        // this.user = result.msg;
        const data = {
          location: result.msg.location,
          id: result.msg.id,
          email: result.msg.email,
          phone: result.msg.phone,
          firstName: result.msg.firstName,
          lastName: result.msg.lastName,
          work: result.msg.work,
        };
        this.user = data;
        this.cards = result.msg.card;
        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  cardDelete = async ({ id }: { id: number }) => {
    this.isLoading = true;

    try {
      const response = await axios.delete(
        `http://127.0.0.1:7005/property/ad/delete/${id}`
      );

      runInAction(() => {
        const result = response.data;

        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  cardUpload = async (file: any, data: any) => {
    this.isLoading = true;

    try {
      const response = await axios.patch(
        `http://127.0.0.1:7005/property/ad/edit`,
        data
      );

      runInAction(() => {
        const result = response.data;

        this.isLoading = false;
      });

      const response2 = await axios.post(
        `http://127.0.0.1:7005/property/ad/upload/${data.id}`,
        file
      );

      runInAction(() => {
        const result = response2.data;

        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  uploadImage = async ({ id, file }: { id: number; file: any }) => {
    this.isLoading = true;
    try {
      const response = await axios.post(
        `http://127.0.0.1:7005/property/ad/upload/${id}`,
        file
      );

      runInAction(() => {
        const result = response.data;

        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };

  updateUser = async (data: any) => {
    this.isLoading = true;

    try {
      const response = await axios.patch(
        `http://127.0.0.1:7005/profile/edit`,
        data
      );

      runInAction(() => {
        const result = response.data;

        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };
}
