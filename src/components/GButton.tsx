import { Button, ButtonProps, Link } from "@chakra-ui/react";

interface GButtonProps extends ButtonProps {
	text: string;
	isWhite: boolean;
	link: string;
}

export function GButton({ text, isWhite, link, ...rest }: GButtonProps) {
	return (
		<Link href={link} textDecoration="none !important" display="block" w="full">
			<Button
				fontWeight={500}
				borderRadius="50px"
				bgColor={isWhite ? "transparent" : "blue.900"}
				color={isWhite ? "blue.900" : "white"}
				border="2px solid"
				borderColor="blue.900"
				_hover={{
					bgColor: isWhite ? "blue.900" : "white",
					color: isWhite ? "white" : "blue.900",
				}}
				{...rest}
			>
				{text}
			</Button>
		</Link>
	);
}
