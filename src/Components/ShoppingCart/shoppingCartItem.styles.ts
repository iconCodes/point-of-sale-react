import { ThemeUICSSObject } from "theme-ui";

export const cartItemWrapper: ThemeUICSSObject = {
	borderBottom: "1px solid",
	borderColor: "border2",
	height: "135px",
	padding: "10px"
};

export const cartItemGrid: ThemeUICSSObject = {
	gap: "10px",
	gridTemplateColumns: "115px 1fr"
};

export const cartItemInfoGrid: ThemeUICSSObject = {
	gridTemplateColumns: "1fr 1fr",
	gap: "10px"
};

export const cartItemInnerWrapper: ThemeUICSSObject = {
	flexDirection: "column",
	gap: "10px"
};

export const cartItemName: ThemeUICSSObject = {
	fontSize: "18px"
};

export const cartItemQuantitySelect: ThemeUICSSObject = {
	background: "black",
	border: "none",
	color: "white",
	outline: "none",
	width: "80px"
};

export const cartItemRemoveButton: ThemeUICSSObject = {
	background: "secondary",
	border: "none",
	color: "text2",
	maxWidth: "max-content",
	outline: "none"
};
