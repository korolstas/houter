"use client";

import { createContext, useContext } from "react";

import { CountriesStore } from "./countries";
import { SliderStore } from "./slider";
import { UserStore } from "./user";

interface Store {
  countriesStore: CountriesStore;
  sliderStore: SliderStore;
  userStore: UserStore;
}

const store: Store = {
  countriesStore: new CountriesStore(),
  sliderStore: new SliderStore(),
  userStore: new UserStore(),
};

const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
