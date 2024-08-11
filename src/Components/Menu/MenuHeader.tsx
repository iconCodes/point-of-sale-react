import React from "react";
import { Flex } from "theme-ui";

interface MenuHeaderProps {}

export const MenuHeader: React.FC<MenuHeaderProps> = () => {
  return (
    <Flex data-testid="menu-header" variant="template.menuHeader">
      GimmeBurger!
    </Flex>
  );
};
