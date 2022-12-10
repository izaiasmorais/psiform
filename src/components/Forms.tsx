import { Flex } from "@chakra-ui/react";
import { Accordions } from "./Accordions";
import { GTitle } from "./GTitle";
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
				id="resources"
			>
				<GTitle title="Formulários Psicológicos Atualizados" />

				<Accordions />
			</Flex>
		</Layout>
	);
}
