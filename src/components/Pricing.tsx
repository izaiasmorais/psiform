import {
	Button,
	Divider,
	Flex,
	Link,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import { CheckCircle, Handshake, WhatsappLogo } from "phosphor-react";
import { Layout } from "./Layout";

export function Pricing() {
	const shadow =
		"rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";

	return (
		<Layout>
			<SimpleGrid
				w="full"
				alignItems="center"
				placeContent="center"
				justifyContent="center"
				gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
				gap="3rem"
				mb="3rem"
			>
				<Flex
					direction="column"
					gridRow={["1"]}
					gridColumn={["1 / 2"]}
					w="full"
					align="center"
					justify="center"
					gap=".5rem"
					textAlign="center"
				>
					<WhatsappLogo size={32} />
					<Text as="strong">Tem Alguma Dúvida?</Text>
					<Text as="p" fontSize="xs">
						Entre em contato clicando no ícone
					</Text>
				</Flex>

				<Flex
					boxShadow={shadow}
					gridRow={["3", "2", "1"]}
					gridColumn={["1 / 2", "1 / 3", "initial"]}
					overflow="hidden"
					borderRadius="1rem"
					direction="column"
					justifySelf="center"
					align="center"
					justify="center"
					maxW="560px"
					minW={["300px", "500px", "530px"]}
					w="full"
				>
					<Flex
						bg="blue.900"
						w="full"
						align="center"
						justify="center"
						p="1.5rem"
						mb="2rem"
					>
						<Text as="h1" color="white" fontSize="2xl" fontWeight="500">
							Plataforma de Formulários Psicológicos
						</Text>
					</Flex>

					<Flex gap="1rem" p="1rem" mb="2rem">
						<s>R$ 197</s>

						<Flex align="end" gap=".5rem">
							R$
							<Text fontSize="5xl" fontWeight="400" lineHeight="1">
								67
							</Text>
						</Flex>

						<Flex align="end">Pagamento único</Flex>
					</Flex>

					<Flex direction="column" gap="1rem" mb="3rem" p="1rem">
						<Flex align="center" justify="center" gap=".5rem">
							<CheckCircle size={24} />
							+160 Documentos psicológicos atualizados
						</Flex>
						<Divider />
						<Flex align="center" justify="center" gap=".5rem">
							<CheckCircle size={24} />
							Incluso: 35 Laudos prontos, baseados no DSM.5
						</Flex>
						<Divider />
						<Flex align="center" justify="center" gap=".5rem">
							<CheckCircle size={24} />
							Bônus: +500 Questões de concurso para psicólogos
						</Flex>
					</Flex>

					<Button
						bg="#FF0000"
						color="white"
						borderRadius="50px"
						mb="3rem"
						_hover={{ bg: "#e50000" }}
					>
						<Link
							href="https://pay.hotmart.com/O54058716T?checkoutMode=10"
							textDecoration="none !important"
						>
							Tenho interesse
						</Link>
					</Button>
				</Flex>

				<Flex
					direction="column"
					w="full"
					gridRow={["2", "1", "initial"]}
					gridColumn={["1 / 2", "2 / 3", "initial"]}
					align="center"
					justify="center"
					gap=".5rem"
					textAlign="center"
				>
					<Handshake size={32} />
					<Text as="strong">Reembolso Hotmart Fácil</Text>
					<Text as="p" fontSize="xs">
						Reembolso com 1 clique nos 7 primeiros dias.
					</Text>
				</Flex>
			</SimpleGrid>
		</Layout>
	);
}
