import { makeAutoObservable, runInAction } from "mobx";

import { getCharacters } from "@api";

export class CountriesStore {
  countries: any[] = [];
  isLoading = false;
  error: string | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCountries = async () => {
    this.isLoading = true;

    try {
      const response = await getCharacters.getCountries(
        "https://countriesnow.space/api/v0.1/countries/codes"
      );

      runInAction(() => {
        const result = response.data;
        this.countries = result.data;
        this.isLoading = false;
      });
    } catch (e: any) {
      this.isLoading = false;
      // this.error = e.response.data.error;
      console.log(e);
    }
  };
}
