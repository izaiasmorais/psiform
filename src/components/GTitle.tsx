import { Text } from "@chakra-ui/react";

interface Props {
	title: string;
}

export function GTitle({ title }: Props) {
	return (
		<Text as="h2" fontWeight="500" fontSize={["3xl", "3xl", "3xl"]}>
			{title}
		</Text>
	);
}
