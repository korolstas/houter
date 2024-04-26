import { makeAutoObservable, runInAction } from "mobx";

import { getCharacters } from "@api";

export class CountriesStore {
  countries: any[] = [];
  isLoadingCountries = false;
  errorCountries: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCountries = async () => {
    this.isLoadingCountries = true;

    try {
      const response = await getCharacters.getCountries(
        "https://countriesnow.space/api/v0.1/countries/codes"
      );

      runInAction(() => {
        const result = response.data;
        this.countries = result.data;
        this.isLoadingCountries = false;
      });
    } catch (e: any) {
      this.isLoadingCountries = false;
      this.errorCountries = e.response.data.error;
      console.log(e);
    }
  };
}
