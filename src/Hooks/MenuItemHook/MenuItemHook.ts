import React from "react";
import burgerData from "../../__mock_data__/burgers.json";
import drinkData from "../../__mock_data__/drinks.json";
import sidesData from "../../__mock_data__/sides.json";
import { MenuCategories, MenuSubCategories, MenuItem } from "../../Types";

type GetMenuItems = (menuGroup: MenuCategories, groupType: MenuSubCategories | null) => MenuItem[];

type MenuItemHook = () => {
  getMenuItems: GetMenuItems;
  getGroupTypes: (menuGroup: MenuCategories) => MenuSubCategories[];
};

export const MenuItemHook: MenuItemHook = () => {
  const menuItems: { [key: string]: MenuItem[] } = {
    burgers: burgerData,
    drinks: drinkData,
    sides: sidesData
  };

  const getMenuItems: GetMenuItems = (menuGroup, groupType) => {
    const items = menuItems[menuGroup];
    if (groupType) {
      return items.filter(item => item.type === groupType);
    }

    return items;
  };

  const getGroupTypes = (menuGroup: MenuCategories): MenuSubCategories[] => {
    const items = menuItems[menuGroup];
    const groupTypes = items.reduce((acc: MenuSubCategories[], item) => {
      if (item.type && !acc.includes(item.type as MenuSubCategories)) {
        acc.push(item.type as MenuSubCategories);
      }

      return acc;
    }, []);

    return groupTypes;
  };

  return { getMenuItems: React.useCallback(getMenuItems, []), getGroupTypes };
};
