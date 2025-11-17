import { create } from "zustand";
import { CartItem, CartItemType, MenuItem } from "@types";
import _cloneDeep from "lodash/cloneDeep";
import { useConfigDataStore } from "../useConfigDataStore/useConfigDataStore";

export interface MenuDataStoreState {
	cartItems: CartItem[];
}

export interface MenuDataStoreActions {
	addToCart: (item: MenuItem) => void;
	setQuantity: (cartItemId: string, quantity: number) => void;
	removeFromCart: (itemId: string) => void;
	clearCart: () => void;
}

export const useMenuDataStore = create<MenuDataStoreState & MenuDataStoreActions>((set, get) => {
	const maxItemQuantity = useConfigDataStore.getState().maxItemQuantity;

	return {
		cartItems: [],

		addToCart: (item: MenuItem) => {
			const currentDuplicateItems = get().cartItems.find(
				cartItem =>
					cartItem.itemId === item._id &&
					cartItem.type === CartItemType.AlaCarte &&
					cartItem.quantity < maxItemQuantity
			);

			if (currentDuplicateItems) {
				get().setQuantity(currentDuplicateItems.cartId, currentDuplicateItems.quantity + 1);
				return;
			}

			const newItem: CartItem = {
				calories: item.calories,
				image: item.image,
				name: item.name,

				cartId: Math.random().toString(),
				itemId: item._id,
				quantity: 1,
				type: CartItemType.AlaCarte,
				totalPrice: Number(item.price.toFixed(2)),
				pricePerUnit: Number(item.price.toFixed(2))
			};

			set(state => ({
				cartItems: [newItem, ...state.cartItems]
			}));
		},

		setQuantity: (cartItemId, quantity) => {
			set(state => ({
				cartItems: state.cartItems.map(cartItem =>
					cartItem.cartId === cartItemId
						? {
								...cartItem,
								quantity,
								totalPrice: Number((quantity * cartItem.pricePerUnit).toFixed(2))
						  }
						: cartItem
				)
			}));
		},

		removeFromCart: (cartId: string) =>
			set(state => ({
				cartItems: state.cartItems.filter(cartItem => cartItem.cartId !== cartId)
			})),

		clearCart: () =>
			set(() => ({
				cartItems: []
			}))
	};
});
