import { makeAutoObservable, runInAction } from "mobx";

import { instance } from "@/api/config";
import { User } from "@types";

export class CustomerStore {
  customer: User | null | any = null;
  cards: any[] = [];
  isLoadingCustomer = false;
  errorCustomer: string | null = null;
  raiting_comments = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCustomer = async (id: string | number) => {
    this.isLoadingCustomer = true;

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

        this.customer = data;
        this.cards = result.msg.card;
        this.isLoadingCustomer = false;
      });
    } catch (e: any) {
      this.isLoadingCustomer = false;
      this.errorCustomer = e.response.data.error;
      console.log(e);
    }
  };
}
