import { createContext, useContext } from "react";

import { SliderStore } from "./slider";
import { modalStore } from "./modal";

interface Store {
  sliderStore: SliderStore;
  modalStore: modalStore;
}

const store: Store = {
  sliderStore: new SliderStore(),
  modalStore: new modalStore(),
};

const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
