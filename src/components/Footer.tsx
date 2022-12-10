import { Flex, Link, Text } from "@chakra-ui/react";
import {
	ArrowFatUp,
	EnvelopeSimple,
	InstagramLogo,
	Users,
	WhatsappLogo,
} from "phosphor-react";
import { Layout } from "./Layout";
import { PsiformLogo } from "./PsiformLogo";

export function Footer() {
	return (
		<Flex bg="blue.900">
			<Layout>
				<Flex
					w="full"
					py="3rem"
					color="white"
					justify="space-between"
					align="center"
					gap="3rem"
					direction={["column", "column", "row"]}
				>
					<Flex direction="column" gap="1rem">
						<PsiformLogo isWhite />
						<Text>2022 © Psiform • Todos os direitos reservados</Text>
					</Flex>

					<Flex gap="1.5rem" align="center">
						<Link href="https://api.whatsapp.com/send?1=pt_BR&phone=5511992367278">
							<WhatsappLogo size={32} />
						</Link>
						<Link href="https://www.instagram.com/psi.form/">
							<InstagramLogo size={32} />
						</Link>
						<Link href="mailto:atendimento.psiform@gmail.com">
							<EnvelopeSimple size={32} />
						</Link>
						<Link href="https://acesso.psiform.com.br/logar">
							<Users size={32} />
						</Link>
						<Link href="#header">
							<ArrowFatUp size={32} />
						</Link>
					</Flex>
				</Flex>
			</Layout>
		</Flex>
	);
}
