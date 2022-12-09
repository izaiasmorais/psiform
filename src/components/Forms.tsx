import { Flex, Text } from "@chakra-ui/react";
import { Accordions } from "./Accordions";
import { Layout } from "./Layout";

export function Forms() {
	return (
		<Layout>
			<Flex
				my="3rem"
				w="full"
				align="center"
				justify="center"
				direction="column"
			>
				<Text as="h1" fontWeight="500" fontSize="4xl">
					Formulários Psicológicos Atualizados
				</Text>

				<Accordions />
			</Flex>
		</Layout>
	);
}
