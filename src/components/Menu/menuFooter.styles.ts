import { ThemeUICSSObject } from "theme-ui";

export const footerWrapper: ThemeUICSSObject = {
	borderTop: "thin",
	borderColor: "border1",
	height: "100%"
};

export const footerGrid: ThemeUICSSObject = {
	gap: "10px",
	gridTemplateColumns: "2fr repeat(3,1fr)",
	height: "100%",
	padding: "10px"
};

export const footerButton: ThemeUICSSObject = {
	alignItems: "center",
	background: "white",
	display: "flex",
	height: "100%",
	justifyContent: "center",
	padding: "10px"
};
