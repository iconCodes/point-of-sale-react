import React from "react";
import { Box, Flex, Grid } from "theme-ui";
import { IconPath, MenuCategories } from "../../Types";

import { Icon } from "../Shared";

interface MenuFooterProps {
  fullscreenToggle: () => void;
  handleMenuGroupChange: (group: MenuCategories) => void;
}

export const MenuFooter: React.FC<MenuFooterProps> = ({
  fullscreenToggle,
  handleMenuGroupChange
}) => {
  const menuIcons: { [key: string]: keyof typeof IconPath } = {
    burgers: "mdiHamburger",
    drinks: "mdiBeer",
    sides: "mdiCupcake"
  };

  return (
    <Box
      data-testid="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "border1",
        height: "100%"
      }}
    >
      <Grid
        columns="2fr repeat(3,1fr) "
        data-testid="item-type-menu"
        gap="10px"
        sx={{ height: "100%", padding: "10px" }}
      >
        <Box
          onClick={fullscreenToggle}
          sx={{ background: "white", height: "100%", padding: "10px" }}
        >
          s
        </Box>

        {Object.values(MenuCategories).map(group => (
          <Flex
            onClick={() => handleMenuGroupChange(group as MenuCategories)}
            sx={{
              background: "white",
              height: "100%",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon path={menuIcons[group]} size={2} color="primary" />
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};
