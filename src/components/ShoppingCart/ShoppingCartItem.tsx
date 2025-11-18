import React from "react";
import { Box, Button, Flex, Grid, Image, Select } from "theme-ui";
import { CartItem } from "src/typings";
import { useConfigDataStore, useMenuDataStore } from "@dataStores";
import * as styles from "./shoppingCartItem.styles";

interface ShoppingCartItemProps {
	item: CartItem;
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
	const setQuantity = useMenuDataStore.getState().setQuantity;
	const removeFromCart = useMenuDataStore.getState().removeFromCart;
	const maxItemQuantity = useConfigDataStore.getState().maxItemQuantity;

	const arrayOfQuantities = Array.from({ length: maxItemQuantity }, (_, i) => i + 1);

	return (
		<Box sx={styles.cartItemWrapper}>
			<Grid sx={styles.cartItemGrid}>
				<Box>
					<Image
						src={`${import.meta.env.VITE_CLOUD}${item.image}`}
						alt="placeholder"
						sx={{ width: "115px" }}
					/>
				</Box>
				<Grid sx={styles.cartItemInfoGrid}>
					<Flex sx={styles.cartItemInnerWrapper}>
						<Box sx={styles.cartItemName}>{item.name}</Box>

						<div>
							<Select
								onChange={e => setQuantity(item.cartId, Number(e.target.value))}
								sx={styles.cartItemQuantitySelect}
								value={item.quantity}
							>
								{arrayOfQuantities.map(qty => (
									<option key={qty} value={qty}>
										{qty}
									</option>
								))}
							</Select>
						</div>

						<Button onClick={() => removeFromCart(item.cartId)} sx={styles.cartItemRemoveButton}>
							Remove
						</Button>
					</Flex>

					<Box sx={{ textAlign: "right" }}>
						<div>${item.totalPrice}</div>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
