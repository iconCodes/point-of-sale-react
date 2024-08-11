import React, { useEffect, useRef } from "react";
import { Box, Grid } from "theme-ui";
import { MenuItemComponent } from "./MenuItem";
import { MenuItem } from "../../../Types";

interface MenuItemsProps {
  handleAddToCart: (item: MenuItem) => void;
  items: MenuItem[];
}

export const MenuItems: React.FC<MenuItemsProps> = ({ handleAddToCart, items }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [items]);

  return (
    <Box ref={wrapperRef} data-testid="menu-items" variant="menuItems.wrapper">
      <Grid>
        {items.map(item => (
          <MenuItemComponent key={item._id} handleAddToCart={handleAddToCart} item={item} />
        ))}
      </Grid>
    </Box>
  );
};
