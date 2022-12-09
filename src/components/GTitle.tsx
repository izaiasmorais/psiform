import { Text } from "@chakra-ui/react";

interface Props {
	title: string;
}

export function GTitle({ title }: Props) {
	return (
		<Text as="h1" fontWeight="500" fontSize="4xl">
			{title}
		</Text>
	);
}
