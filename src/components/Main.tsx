import { Flex, Image, Text } from "@chakra-ui/react";
import { GButton } from "./GButton";
import PlatformImg from "../assets/plataforma.png";
import { Layout } from "./Layout";

export function Main() {
	const shadow =
		"rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";

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
						A plataforma Psiform centraliza formulários e documentos
						psicológicos, revisados e atualizados por profissionais dentro das
						resoluções 06/2019 e 04/2020 do CFP, facilitando o dia a dia em sua
						clínica.
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
					maxW="610px"
					w="full"
					borderRadius=".5rem"
					boxShadow={shadow}
				/>
			</Flex>
		</Layout>
	);
}
