import { create } from "zustand";

export interface ConfigDataStoreState {
	maxItemQuantity: number;
}

export const useConfigDataStore = create<ConfigDataStoreState>(() => ({
	maxItemQuantity: 3
}));
