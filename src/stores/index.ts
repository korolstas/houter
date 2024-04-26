"use client";

import { createContext, useContext } from "react";

import { CountriesStore } from "./countries";
import { ButtonStore } from "./button";
import { CardStore } from "./cards";
import { UserStore } from "./user";

interface Store {
  countriesStore: CountriesStore;
  buttonStore: ButtonStore;
  userStore: UserStore;
  cardStore: CardStore;
}

const store: Store = {
  countriesStore: new CountriesStore(),
  buttonStore: new ButtonStore(),
  userStore: new UserStore(),
  cardStore: new CardStore(),
};

const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
