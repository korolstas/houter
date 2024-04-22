import axios from "axios";

export const getCharacters = {
  getCountries(url: string) {
    return axios.get(url);
  },
};

export const postUser = {
  postRegister(
    url: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    return axios.post(url, {
      firstName,
      lastName,
      email,
    });
  },
};
