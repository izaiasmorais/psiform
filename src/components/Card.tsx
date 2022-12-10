import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
	icon: ReactNode;
	title: string;
	text: string;
}

export function Card({ icon, text, title }: CardProps) {
	return (
		<Flex direction="column" alignItems="center" justify="center">
			<Flex gap=".5rem" align="center" justify="center" mb="1rem">
				{icon}
				<Text as="h3" fontSize={["lg", "lg", "2xl"]} fontWeight="500">
					{title}
				</Text>
			</Flex>

			<Text as="p" color="blue.700" textAlign="center" maxW="418px">
				{text}
			</Text>
		</Flex>
	);
}
