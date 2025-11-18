import { FC, useEffect, useState } from "react";
import { Grid } from "theme-ui";
import { MenuItems } from "./MenuItems/MenuItems";
import { MenuCategories, MenuSubCategories, MenuItem } from "@types";
import { useMenuItems } from "@hooks";
import * as styles from "./menu.styles";
import { MenuFooter } from "./MenuFooter";
import { MenuHeader } from "./MenuHeader";
import { MenuSubHeader } from "./MenuSubHeader";

interface MenuWrapperProps {
	fullscreenToggle: () => void;
}

export const MenuWrapper: FC<MenuWrapperProps> = ({ fullscreenToggle }) => {
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
		<Grid sx={styles.menuWrapper}>
			<MenuHeader />

			<MenuSubHeader handleMenuGroupTypeChange={handleSubCategoryChange} menuGroup={menuGroup} />

			<MenuItems items={menuItems} />

			<MenuFooter
				fullscreenToggle={fullscreenToggle}
				handleMenuGroupChange={handleCategoryChange}
			/>
		</Grid>
	);
};
