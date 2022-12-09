import { extendTheme } from "@chakra-ui/react";
import { defaultColors } from "./colors";

export const theme = extendTheme({
	fonts: {
		heading: "Lexend Deca, sans-serif",
		body: "Lexend Deca, sans-serif",
	},
	colors: { ...defaultColors },
	styles: {
		global: {
			html: {
				"&::-webkit-scrollbar": {
					width: "5px",
				},
				"&::-webkit-scrollbar-track": {
					background: "#f5f5f5",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "#1e3a8a",
					borderRadius: "5px",
				},
			},
			button: {
				cursor: "pointer",
			},
		},
	},
});
