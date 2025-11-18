import { FC } from "react";
import ReactIcon from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";
import { IconPath } from "@types";
import { Box } from "theme-ui";

interface CustomIconProps extends Omit<Omit<IconProps, "path">, "color"> {
	color?: string;
	path: keyof typeof IconPath;
	size?: number;
}

export const SharedIcon: FC<CustomIconProps> = ({ color = "black", path, size = 1, ...rest }) => {
	return (
		<Box sx={{ color }}>
			<ReactIcon path={IconPath[path]} size={size} {...rest} />
		</Box>
	);
};
