import { Flex, Text, Image } from "@chakra-ui/react";

interface Props {
	isWhite?: boolean;
}

export function PsiformLogo({ isWhite }: Props) {
	return (
		<Flex alignItems="center" gap=".5rem">
			<Image src="/psiform.png" alt="Formulários Psicológicos" />
			<Text
				as="h1"
				fontSize="1.25rem"
				fontWeight={600}
				color={isWhite ? "white" : "blue.900"}
			>
				Psiform
			</Text>
		</Flex>
	);
}
