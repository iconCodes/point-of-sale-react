import { ThemeUICSSObject } from "theme-ui";

export const itemWrapper: ThemeUICSSObject = {
	background: "white",
	height: "325px",
	padding: "10px",
	position: "relative",
	overflow: "hidden"
};

export const itemImage: ThemeUICSSObject = {
	background: "primary",
	backgroundSize: "cover",
	backgroundPosition: "center",
	height: "200px",
	overflow: "hidden",
	textAlign: "center",
	img: {
		height: "100%"
	}
};

export const itemInfoWrapper: ThemeUICSSObject = {
	justifyContent: "space-between"
};

export const itemInfoInnerWrapper: ThemeUICSSObject = {
	flexDirection: "column",
	gap: 1,
	mt: 1
};

export const itemCalories: ThemeUICSSObject = {
	color: "primary",
	fontSize: "1rem"
};

export const itemName: ThemeUICSSObject = {
	fontSize: "1.375rem",
	textOverflow: "ellipsis",
	overflow: "hidden",
	whiteSpace: "nowrap"
};

export const itemPrice: ThemeUICSSObject = {
	fontSize: "2.5rem",
	fontWeight: "500"
};

export const addToCart: ThemeUICSSObject = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "50%",
	bottom: "10px",
	color: "primary",
	cursor: "pointer",
	fontSize: "2.75rem",
	height: "45px",
	lineHeight: "50px",
	position: "absolute",
	right: "20px",
	textAlign: "center",
	width: "45px",
	boxShadow: "0 0 10px rgba(0,0,0,.5)",
	background: "linear-gradient(0deg, rgba(217,217,217,1) 10%, rgba(246,246,246,1) 90%)",

	":hover": {
		filter: "brightness(1.1)"
	}
};
