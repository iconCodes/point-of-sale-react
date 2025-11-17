import React from "react";
import { Box, Flex } from "theme-ui";
import { MenuItem } from "src/Types";
import { useMenuDataStore } from "@dataStores";
import * as styles from "./menuItem.styles";

interface MenuItemProps {
  item: MenuItem;
}

export const MenuItemComponent: React.FC<MenuItemProps> = ({ item }) => {
  const handleAddToCart = useMenuDataStore.getState().addToCart;

  return (
    <Box sx={styles.itemWrapper} onClick={() => handleAddToCart(item)}>
      <Box
        sx={{
          ...styles.itemImage,
          backgroundImage: `url(${import.meta.env.VITE_CLOUD}product-bg.jpg)`
        }}
      >
        <img
          src={`${import.meta.env.VITE_CLOUD}${item.image}`}
          alt={item.name}
        />
      </Box>
      <Flex sx={styles.itemInfoWrapper}>
        <Flex sx={styles.itemInfoInnerWrapper}>
          <Box sx={styles.itemCalories}>{item.calories} calories</Box>
          <Box sx={styles.itemName}>{item.name}</Box>
          <Box sx={styles.itemPrice}>{item.price}</Box>
        </Flex>

        <Box sx={styles.addToCart}>+</Box>
      </Flex>
    </Box>
  );
};
