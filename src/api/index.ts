import axios from "axios";

export const getCharacters = {
  getCountries(url: string) {
    return axios.get(url);
  },
};
