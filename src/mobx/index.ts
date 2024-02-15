import { createContext, useContext } from "react";

import { SliderStore } from "./slider";

interface Store {
  sliderStore: SliderStore;
}

const store: Store = {
  sliderStore: new SliderStore(),
};

const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
