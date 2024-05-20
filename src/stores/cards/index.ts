import { makeAutoObservable, runInAction } from "mobx";

import { instance } from "@/api/config";

import {
  ShowNDeleteCardProps,
  UploadImageProps,
  CreateCardProps,
  EditCardProps,
  CardProps,
} from "./types";

export class CardStore {
  card: any = {};
  cards: any[] = [];
  isLoadingCard: boolean = false;
  errorCard: string | null = null;
  successCard: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  clearSuccessCard = () => {
    this.successCard = null;
  };

  createCard = async ({
    id,
    file,
    price,
    title,
    realty,
    rent,
    location,
    description,
  }: CreateCardProps) => {
    this.isLoadingCard = true;

    const data = {
      id,
      price: Number(price),
      title,
      realty,
      rent,
      location,
      description,
    };

    try {
      const response1 = await instance.post("/property/ad/create", data);

      runInAction(() => {
        const result = response1.data;

        if (result.msg) {
          this.isLoadingCard = false;
        }
      });

      const response2 = await instance.post(
        `/property/ad/upload/${response1.data.msg}`,
        file
      );

      runInAction(() => {
        const result = response2.data;

        if (result.msg) {
          this.isLoadingCard = false;
        }
      });
    } catch (e: any) {
      this.isLoadingCard = false;
      // this.errorCard = e.response.data.errorCard;
      console.log(e);
    }
  };

  getCards = async ({
    user_id,
    start_price,
    end_price,
    location,
    realty,
    rent,
  }: CardProps) => {
    this.isLoadingCard = true;

    try {
      const response = await instance.get(`/property/ads`, {
        params: {
          user_id,
          start_price,
          end_price,
          location,
          realty,
          rent,
        },
      });

      runInAction(() => {
        const result = response.data;

        const data = result.msg;

        this.cards = data;
        this.isLoadingCard = false;
      });
    } catch (e: any) {
      this.isLoadingCard = false;
      // this.errorCard = e.response.data.errorCard;
      console.log(e);
    }
  };

  showCard = async ({ id }: ShowNDeleteCardProps) => {
    this.isLoadingCard = true;

    try {
      const response = await instance.get(`/property/ad/show/${id}`);

      runInAction(() => {
        const result = response.data;
        this.card = result.msg;
        this.isLoadingCard = false;
      });

      const response2 = await instance.get(
        `/profile/${response.data.msg.user.id}`
      );

      runInAction(() => {
        const result = response2.data;
        this.card.user = result.msg;
        this.isLoadingCard = false;
      });
    } catch (e: any) {
      this.isLoadingCard = false;
      // this.errorCard = e.response.data.errorCard;
      console.log(e);
    }
  };

  deleteCard = async ({ id }: ShowNDeleteCardProps) => {
    this.isLoadingCard = true;

    try {
      const response = await instance.delete(`/property/ad/delete/${id}`);

      runInAction(() => {
        const result = response.data;

        this.isLoadingCard = false;
      });
    } catch (e: any) {
      this.isLoadingCard = false;
      // this.errorCard = e.response.data.errorCard;
      console.log(e);
    }
  };

  editCard = async ({ file, data }: EditCardProps) => {
    this.isLoadingCard = true;

    try {
      const response = await instance.patch(`/property/ad/edit`, data);

      runInAction(() => {
        const result = response.data;
      });

      try {
        const response = await instance.post(`/ad/upload/${data.id}`, file);

        runInAction(() => {
          const result = response.data;

          this.isLoadingCard = false;
        });
      } catch (e: any) {
        this.isLoadingCard = false;
        // this.errorCard = e.response.data.errorCard;
        this.errorCard = "Error";
        console.log(e);
      }
    } catch (e: any) {
      this.isLoadingCard = false;
      // this.errorCard = e.response.data.errorCard;
      this.errorCard = "Error";
      console.log(e);
    }

    this.successCard = "Update Ad is successfuly";
  };

  uploadImage = async ({ id, file }: UploadImageProps) => {
    this.isLoadingCard = true;
    try {
      const response = await instance.post(`/property/ad/upload/${id}`, file);

      runInAction(() => {
        const result = response.data;

        this.isLoadingCard = false;
      });
    } catch (e: any) {
      this.isLoadingCard = false;
      // this.errorCard = e.response.data.errorCard;
      console.log(e);
    }
  };
}
