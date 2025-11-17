import { FC } from "react";
import { Flex } from "theme-ui";
import * as styles from "./menu.styles";

interface MenuHeaderProps {}

export const MenuHeader: FC<MenuHeaderProps> = () => {
	return <Flex sx={styles.menuHeader}>GimmeBurger!</Flex>;
};
