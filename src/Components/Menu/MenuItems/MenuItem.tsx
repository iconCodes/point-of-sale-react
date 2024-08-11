import React from "react";
import { Box, Flex } from "theme-ui";
import { MenuItem } from "../../../Types";

interface MenuItemProps {
  handleAddToCart: (item: MenuItem) => void;
  item: MenuItem;
}

export const MenuItemComponent: React.FC<MenuItemProps> = ({ handleAddToCart, item }) => {
  return (
    <Box variant="menuItems.item">
      <Box variant="menuItems.item.image">
        <img src={`${import.meta.env.VITE_CLOUD}${item.image}`} alt={item.name} />
      </Box>
      <Flex sx={{ justifyContent: "space-between" }}>
        <Flex sx={{ flexDirection: "column", gap: 1, mt: 1 }}>
          <Box variant="menuItems.item.calories">{item.calories} calories</Box>
          <Box variant="menuItems.item.name">{item.name}</Box>
          <Box variant="menuItems.item.price">{item.price}</Box>
        </Flex>

        <Box variant="menuItems.item.addButton" onClick={() => handleAddToCart(item)}>
          +
        </Box>
      </Flex>
    </Box>
  );
};
