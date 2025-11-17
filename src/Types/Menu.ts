export type MenuItem = {
	_id: string;
	calories: number;
	image: string;
	name: string;
	price: number;
	type?: string;
};

export enum MenuCategories {
	Burgers = "burgers",
	Drinks = "drinks",
	Sides = "sides"
}

export type MenuSubCategories = BurgerSubCategories | DrinkSubCategories;

export enum BurgerSubCategories {
	Beef = "beef",
	Chicken = "chicken",
	Fish = "fish"
}

export enum DrinkSubCategories {
	Coffee = "Coffee",
	FTN = "Fountain",
	Juice = "Juice",
	Milk = "Milk",
	Shakes = "Shakes",
	Tea = "Tea",
	Water = "Water"
}

export enum CartItemType {
	Combo = "combo",
	AlaCarte = "ala-carte"
}

export interface CartItem {
	calories: number;
	image: string;
	name: string;

	cartId: string;
	itemId: string;
	quantity: number;
	type: CartItemType;

	pricePerUnit: number;
	totalPrice: number;
}
