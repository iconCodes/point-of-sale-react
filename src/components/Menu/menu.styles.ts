import { ThemeUICSSObject } from "theme-ui";

export const menuWrapper: ThemeUICSSObject = {
	background: "background1",
	gridTemplateRows: "50px 60px 1fr 100px",
	height: "100vh"
};

export const menuHeader: ThemeUICSSObject = {
	alignItems: "center",
	background: "primary",
	boxShadow: "0 .25rem .5rem rgba(0, 0, 0, 0.25)",
	color: "text2",
	fontSize: "1.5rem",
	fontWeight: "500",
	justifyContent: "center",
	px: 3
};

export const menuSubHeader: ThemeUICSSObject = {
	borderBottom: "1px solid",
	borderColor: "border1",
	px: "10px"
};

export const buttonWrapper: ThemeUICSSObject = {
	alignItems: "center",
	height: "100%"
};

export const innerButtonWrapper: ThemeUICSSObject = {
	gap: 3,
	alignItems: "center",
	height: "100%",
	overflowX: "auto"
};
