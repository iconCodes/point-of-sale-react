import React from "react";
import { Box, Button, Flex, Grid } from "theme-ui";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { CartItem } from "../../Types";

interface ShoppingCartWrapperProps {
  cartItems: CartItem[];
}

export const ShoppingCartWrapper: React.FC<ShoppingCartWrapperProps> = ({ cartItems }) => {
  const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  const salesTax = (Number(subTotal) * 0.06).toFixed(2);
  const total = (Number(subTotal) + Number(salesTax)).toFixed(2);

  return (
    <Grid
      data-testid="shopping-cart-wrapper"
      sx={{
        background: "background2",
        gridTemplateRows: "50px 1fr 110px 60px 40px 5px",
        height: "100vh",
        width: "100%",
        color: "text2",
        gap: "10px"
      }}
    >
      <Box
        sx={{
          background: "secondary",
          borderBottom: "1px solid",
          borderColor: "border2"
        }}
        data-testid="shopping-cart-header"
      >
        Orders
      </Box>
      <Box
        data-testid="shopping-cart-items"
        sx={{
          overflowX: "hidden",
          overflowY: "scroll",
          width: "calc(100% - .5rem)",
          "::-webkit-scrollbar": {
            width: ".5rem",
            background: "scrollbarBg2"
          },
          "::-webkit-scrollbar-thumb ": {
            background: "scrollbarThumb2"
          },
          paddingRight: "10px"
        }}
      >
        {cartItems.map(item => (
          <ShoppingCartItem key={item._id} item={item} />
        ))}
      </Box>

      <Grid
        columns="1fr 1fr"
        gap="0"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          p: "10px",
          borderTop: "1px solid",
          borderColor: "border2"
        }}
      >
        <Box>Subtotal</Box>
        <Box sx={{ textAlign: "right" }}>${subTotal}</Box>

        <Box>Sales Tax</Box>
        <Box sx={{ textAlign: "right" }}>${salesTax}</Box>

        <Box>Fees</Box>
        <Box sx={{ textAlign: "right" }}>$0.00</Box>
      </Grid>

      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
          fontSize: "28px",
          fontWeight: "bold",
          borderTop: "1px solid",
          borderColor: "border2"
        }}
      >
        <Box>Total</Box>
        <Box>${total}</Box>
      </Flex>

      <Grid
        data-testid="shopping-cart-checkout"
        columns="1fr 3fr"
        gap="10px"
        px="10px"
        sx={{ height: "40px" }}
      >
        <Button sx={{ height: "40px" }}>Start Over</Button>
        <Button sx={{ height: "40px" }}>Place Order</Button>
      </Grid>

      <Box />
    </Grid>
  );
};
