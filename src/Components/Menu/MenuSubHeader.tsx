import React from "react";
import { Box, Button, Flex } from "theme-ui";
import { MenuCategories, MenuSubCategories } from "../../Types";
import { useMenuItems } from "../../Hooks";

interface MenuSubHeaderProps {
  handleMenuGroupTypeChange: (groupType: MenuSubCategories | null) => void;
  menuGroup: MenuCategories;
}

export const MenuSubHeader: React.FC<MenuSubHeaderProps> = ({
  handleMenuGroupTypeChange,
  menuGroup
}) => {
  const { getGroupTypes } = useMenuItems();
  const groupTypes = getGroupTypes(menuGroup);

  return (
    <Box data-testid="menu-sub-header" variant="template.menuSubHeader">
      <Flex
        sx={{
          px: 3,
          gap: 3,
          alignItems: "center",
          height: "100%"
        }}
      >
        <Button onClick={() => handleMenuGroupTypeChange(null)} variant="pills.primary">
          All
        </Button>

        {groupTypes.map(groupType => (
          <Button
            key={groupType}
            onClick={() => handleMenuGroupTypeChange(groupType as MenuSubCategories)}
            variant="pills.primary"
          >
            {groupType}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};
