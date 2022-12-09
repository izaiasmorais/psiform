import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { GlobalButton } from "./Button";
import { Layout } from "./Layout";

export function Header() {
	return (
		<Layout>
			<Flex
				as="header"
				alignItems="center"
				justify="space-between"
				w="100%"
				py="1rem"
			>
				<Flex alignItems="center" gap=".5rem">
					<Image src="/psiform.png" alt="Formulários Psicológicos" />
					<Text as="h1" fontSize="1.25rem" fontWeight={600}>
						Psiform
					</Text>
				</Flex>
				<Flex as="nav" alignItems="center" gap="2rem">
					<Text>Soluções</Text>
					<Text>Recursos</Text>
					<Link href="#price">Preços</Link>
					<GlobalButton isWhite text="Área de membros" />
				</Flex>
			</Flex>
		</Layout>
	);
}
