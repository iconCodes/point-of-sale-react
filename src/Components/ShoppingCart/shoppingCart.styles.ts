import { ThemeUICSSObject } from "theme-ui";

export const cartWrapper: ThemeUICSSObject = {
	background: "background2",
	color: "text2",
	gap: "10px",
	gridTemplateRows: "50px 1fr 110px 60px 40px 5px",
	height: "100vh",
	width: "100%"
};

export const cartHeader: ThemeUICSSObject = {
	background: "secondary",
	borderBottom: "1px solid",
	borderColor: "border2"
};

export const cartItemWrapper: ThemeUICSSObject = {
	overflowX: "hidden",
	overflowY: "scroll",
	padding: "0 10px",
	width: "calc(100% - .5rem)",
	"::-webkit-scrollbar": {
		width: ".5rem",
		background: "scrollbarBg2"
	},
	"::-webkit-scrollbar-thumb ": {
		background: "scrollbarThumb2"
	}
};

export const cartItemGrid: ThemeUICSSObject = {
	alignItems: "center",
	borderTop: "1px solid",
	borderColor: "border2",
	gap: "0",
	gridTemplateColumns: "1fr 1fr",
	justifyContent: "space-between",
	p: "10px"
};

export const cartTotalWrapper: ThemeUICSSObject = {
	alignItems: "center",
	borderTop: "1px solid",
	borderColor: "border2",
	fontSize: "28px",
	fontWeight: "bold",
	justifyContent: "space-between",
	px: "10px"
};

export const cartButtonWrapper: ThemeUICSSObject = {
	height: "40px",
	gridTemplateColumns: "1fr 3fr",
	gap: "10px",
	px: "10px",

	">button": {
		height: "40px"
	}
};
