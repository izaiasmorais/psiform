import { Flex, Link, Text } from "@chakra-ui/react";
import { CaretDown } from "phosphor-react";
import { GButton } from "./GButton";
import { HeaderMenu } from "./HeaderMenu";
import { Layout } from "./Layout";
import { PsiformLogo } from "./PsiformLogo";

export function Header() {
	return (
		<Layout>
			<Flex
				as="header"
				alignItems="center"
				justify="space-between"
				w="100%"
				py="1rem"
				id="header"
			>
				<PsiformLogo />
				<Flex as="nav" alignItems="center" gap="2rem">
					<Link href="https://psiform.com.br/digital/" w="full">
						Anamnese digital
					</Link>
					<Link href="#resources">Recursos</Link>
					<Link href="#about">Sobre</Link>
					<GButton
						isWhite
						text="Área de membros"
						link="https://acesso.psiform.com.br/logar"
					/>
					<HeaderMenu />
				</Flex>
			</Flex>
		</Layout>
	);
}
