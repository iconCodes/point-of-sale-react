import { FC, useLayoutEffect, useState, useRef } from "react";
import { Grid, ThemeUIProvider } from "theme-ui";
import { theme } from "./theming/theme";

import { ShoppingCartWrapper } from "@components/ShoppingCart/ShoppingCart";
import { MenuWrapper } from "@components/Menu/MenuWrapper";

const App: FC = () => {
	const elementRef = useRef<HTMLDivElement>(null);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const enterFullscreen = () => {
		if (elementRef?.current?.requestFullscreen) {
			elementRef.current.requestFullscreen();
		}
	};

	const exitFullscreen = () => {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			setIsFullscreen(false);
		}
	};

	useLayoutEffect(() => {
		enterFullscreen();
		setIsFullscreen(true);
	}, []);

	const fullscreenToggle = () => {
		if (isFullscreen) {
			exitFullscreen();
		} else {
			enterFullscreen();
		}
	};

	return (
		<ThemeUIProvider theme={theme}>
			<Grid columns="3fr 2fr" gap={0} ref={elementRef}>
				<MenuWrapper fullscreenToggle={fullscreenToggle} />

				<ShoppingCartWrapper />
			</Grid>
		</ThemeUIProvider>
	);
};

export default App;
