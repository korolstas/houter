import { createContext, useContext } from "react";

import { SliderStore } from "./slider";
import { ModalStore } from "./modal";
import { UserStore } from "./user";

interface Store {
  sliderStore: SliderStore;
  modalStore: ModalStore;
  userStore: UserStore;
}

const store: Store = {
  sliderStore: new SliderStore(),
  modalStore: new ModalStore(),
  userStore: new UserStore(),
};

const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
