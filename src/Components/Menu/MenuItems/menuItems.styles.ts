import { ThemeUICSSObject } from "theme-ui";

export const menuItemsWrapper: ThemeUICSSObject = {
	overflowX: "hidden",
	overflowY: "scroll",
	width: "calc(100% - .5rem)",
	"::-webkit-scrollbar": {
		width: ".5rem",
		background: "scrollbarBg1"
	},

	"::-webkit-scrollbar-thumb ": {
		background: "scrollbarThumb1"
	},

	"> div": {
		display: "grid",
		gap: "10px",
		gridTemplateColumns: "repeat(3,1fr)",
		px: "10px"
	}
};
