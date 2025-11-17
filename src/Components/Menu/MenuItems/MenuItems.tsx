import { FC, useEffect, useRef } from "react";
import { Box, Grid } from "theme-ui";
import { MenuItemComponent } from "./MenuItem";
import { MenuItem } from "@types";
import * as styles from "./menuItems.styles";

interface MenuItemsProps {
	items: MenuItem[];
}

export const MenuItems: FC<MenuItemsProps> = ({ items }) => {
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
		<Box ref={wrapperRef} sx={styles.menuItemsWrapper}>
			<Grid>
				{items.map(item => (
					<MenuItemComponent key={item._id} item={item} />
				))}
			</Grid>
		</Box>
	);
};
