import { FC } from "react";
import { Box, Button, Flex } from "theme-ui";
import { MenuCategories, MenuSubCategories } from "@types";
import * as styles from "./menu.styles";
import { useMenuItems } from "@hooks";

interface MenuSubHeaderProps {
	handleMenuGroupTypeChange: (groupType: MenuSubCategories | null) => void;
	menuGroup: MenuCategories;
}

export const MenuSubHeader: FC<MenuSubHeaderProps> = ({ handleMenuGroupTypeChange, menuGroup }) => {
	const { getGroupTypes } = useMenuItems();
	const groupTypes = getGroupTypes(menuGroup);

	return (
		<Box sx={styles.menuSubHeader}>
			<Flex sx={styles.buttonWrapper}>
				<Button
					onClick={() => handleMenuGroupTypeChange(null)}
					variant="pills.primary"
					sx={{ mr: 3 }}
				>
					All
				</Button>

				<Flex sx={styles.innerButtonWrapper}>
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
			</Flex>
		</Box>
	);
};
