import { Flex, Image, Text } from "@chakra-ui/react";
import { GButton } from "./GButton";
import PlatformImg from "../assets/plataforma.png";
import { Layout } from "./Layout";

export function Main() {
	return (
		<Layout>
			<Flex
				py="3rem"
				alignItems="center"
				justify="space-between"
				gap="2rem"
				direction={["column", "column", "row"]}
			>
				<Flex direction="column">
					<Text as="h1" fontSize="2.25rem" fontWeight="500" lineHeight="40px">
						Plataforma de Formulários Psicológicos
					</Text>
					<Text as="p" my="1.5rem">
						A plataforma psiform centraliza formulários e documentos
						psicológicos, revisados e atualizados por profissionais dentro das
						resoluções 06/2019 e 04/2020 do CFP para facilitar o seu dia a dia
						na clínica.
					</Text>
					<GButton
						link="https://pay.hotmart.com/O54058716T?checkoutMode=10"
						isWhite={false}
						maxWidth="max-content"
						text="Tenho interesse"
						title="Tenho interesse em assinar o produto"
						id="tenho-interesse"
						aria-label="tenho-interesse"
					/>
				</Flex>

				<Image
					src={PlatformImg}
					alt="Plataforma de Formulários Psicológicos"
					maxW="567px"
					w="full"
				/>
			</Flex>
		</Layout>
	);
}
