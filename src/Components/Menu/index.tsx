import React, { useEffect, useState } from "react";
import { Grid } from "theme-ui";
import { MenuHeader } from "./MenuHeader";
import { MenuSubHeader } from "./MenuSubHeader";
import { MenuItems } from "./MenuItems/MenuItems";
import { MenuFooter } from "./MenuFooter";
import { MenuCategories, MenuSubCategories, MenuItem } from "../../Types";
import { useMenuItems } from "../../Hooks";

interface MenuWrapperProps {
  fullscreenToggle: () => void;
  handleAddToCart: (item: MenuItem) => void;
}

export const MenuWrapper: React.FC<MenuWrapperProps> = ({ fullscreenToggle, handleAddToCart }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [menuGroup, setMenuGroup] = useState<MenuCategories>(MenuCategories.Burgers);
  const [menuGroupType, setMenuGroupType] = useState<MenuSubCategories | null>(null);

  const { getMenuItems } = useMenuItems();

  useEffect(() => {
    setMenuItems(getMenuItems(menuGroup, menuGroupType));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMenuItems(getMenuItems(menuGroup, menuGroupType));
  }, [getMenuItems, menuGroup, menuGroupType]);

  const handleCategoryChange = (group: MenuCategories): void => {
    setMenuGroupType(null);
    setMenuGroup(group);
  };

  const handleSubCategoryChange = (groupType: MenuSubCategories | null): void => {
    setMenuGroupType(groupType);
  };

  return (
    <Grid
      data-testid="menu-wrapper"
      sx={{
        background: "background1",
        gridTemplateRows: "50px 60px 1fr 100px",
        height: "100vh"
      }}
    >
      <MenuHeader />

      <MenuSubHeader handleMenuGroupTypeChange={handleSubCategoryChange} menuGroup={menuGroup} />

      <MenuItems items={menuItems} handleAddToCart={handleAddToCart} />

      <MenuFooter
        fullscreenToggle={fullscreenToggle}
        handleMenuGroupChange={handleCategoryChange}
      />
    </Grid>
  );
};
