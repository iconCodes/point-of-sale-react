import React from "react";
import { Box, Button, Grid } from "theme-ui";
import { IconPath, MenuCategories } from "@types";
import * as styles from "./menuFooter.styles";
import { Icon } from "@components/Shared";

interface MenuFooterProps {
  fullscreenToggle: () => void;
  handleMenuGroupChange: (group: MenuCategories) => void;
}

export const MenuFooter: React.FC<MenuFooterProps> = ({
  fullscreenToggle,
  handleMenuGroupChange
}) => {
  const menuIcons: { [key: string]: keyof typeof IconPath } = {
    fullScreen: "mdiFullscreen",
    burgers: "mdiHamburger",
    drinks: "mdiBeer",
    sides: "mdiCupcake"
  };

  return (
    <Box sx={styles.footerWrapper}>
      <Grid sx={styles.footerGrid}>
        <Button onClick={fullscreenToggle} sx={styles.footerButton}>
          <Icon path={menuIcons.fullScreen} size={2} color="primary" />
        </Button>

        {Object.values(MenuCategories).map(group => (
          <Button
            onClick={() => handleMenuGroupChange(group as MenuCategories)}
            sx={styles.footerButton}
          >
            <Icon path={menuIcons[group]} size={2} color="primary" />
          </Button>
        ))}
      </Grid>
    </Box>
  );
};
