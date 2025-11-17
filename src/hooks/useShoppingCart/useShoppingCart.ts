import { useMenuDataStore } from "../../dataStores";

export const useShoppingCart = () => {
	const cartItems = useMenuDataStore(state => state.cartItems);

	const subTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
	const salesTax = (Number(subTotal) * 0.06).toFixed(2);
	const total = (Number(subTotal) + Number(salesTax)).toFixed(2);

	return { cartItems, subTotal, salesTax, total };
};
