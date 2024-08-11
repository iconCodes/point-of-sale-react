import React from "react";
import { Box, Button, Flex, Grid, Image, Select } from "theme-ui";
import { CartItem } from "../../Types";

interface ShoppingCartItemProps {
  item: CartItem;
  handleRemoveFromCart: (id: string) => void;
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  item,
  handleRemoveFromCart
}) => {
  return (
    <Box
      sx={{
        height: "135px",
        padding: "10px",
        borderBottom: "1px solid",
        borderColor: "border2"
      }}
    >
      <Grid columns="115px 1fr" gap="10px">
        <Box>
          <Image
            src={`${import.meta.env.VITE_CLOUD}${item.image}`}
            alt="placeholder"
            sx={{ width: "115px" }}
          />
        </Box>
        <Grid columns="1fr 1fr" gap="10px">
          <Flex sx={{ flexDirection: "column", gap: "10px" }}>
            <Box sx={{ fontSize: "18px" }}>{item.name}</Box>
            <div>
              <Select
                sx={{
                  color: "white",
                  background: "black",
                  width: "80px",
                  border: "none",
                  outline: "none"
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Select>
            </div>

            <Button
              onClick={() => handleRemoveFromCart(item._id)}
              sx={{
                background: "secondary",
                color: "text2",
                border: "none",
                outline: "none",
                maxWidth: "max-content"
              }}
            >
              Remove
            </Button>
          </Flex>

          <Box sx={{ textAlign: "right" }}>
            <div>${item.price}</div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
