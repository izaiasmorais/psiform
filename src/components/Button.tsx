import { Button } from "@chakra-ui/react";

interface ButtonProps {
	text: string;
	isWhite: boolean;
}

export function GlobalButton({ text, isWhite }: ButtonProps) {
	return (
		<Button
			fontWeight={500}
			maxWidth="max-content"
			borderRadius="50px"
			bgColor={isWhite ? "transparent" : "blue.900"}
			color={isWhite ? "blue.900" : "white"}
			border="2px solid"
			borderColor="blue.900"
			_hover={{
				bgColor: isWhite ? "blue.900" : "transparent",
				color: isWhite ? "white" : "blue.900",
			}}
		>
			{text}
		</Button>
	);
}
