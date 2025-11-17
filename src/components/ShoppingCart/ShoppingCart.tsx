import { FC } from "react";
import { Box, Button, Flex, Grid } from "theme-ui";
import { useMenuDataStore } from "@dataStores";
import { useShoppingCart } from "@hooks";
import * as styles from "./shoppingCart.styles";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCartWrapper: FC = () => {
  const cartItems = useMenuDataStore(state => state.cartItems);
  const clearCart = useMenuDataStore.getState().clearCart;
  const { subTotal, salesTax, total } = useShoppingCart();

  return (
    <Grid sx={styles.cartWrapper}>
      <Box sx={styles.cartHeader}>Orders</Box>
      <Box sx={styles.cartItemWrapper}>
        {cartItems.map(item => (
          <ShoppingCartItem key={item.cartId} item={item} />
        ))}
      </Box>

      <Grid sx={styles.cartItemGrid}>
        <Box>Subtotal</Box>
        <Box sx={{ textAlign: "right" }}>${subTotal}</Box>

        <Box>Sales Tax</Box>
        <Box sx={{ textAlign: "right" }}>${salesTax}</Box>

        <Box>Fees</Box>
        <Box sx={{ textAlign: "right" }}>$0.00</Box>
      </Grid>

      <Flex sx={styles.cartTotalWrapper}>
        <Box>Total</Box>
        <Box>${total}</Box>
      </Flex>

      <Grid sx={styles.cartButtonWrapper}>
        <Button onClick={clearCart}>Start Over</Button>
        <Button>Place Order</Button>
      </Grid>

      <Box />
    </Grid>
  );
};
