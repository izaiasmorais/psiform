import { Flex, SimpleGrid } from "@chakra-ui/react";
import { DeviceMobile, FileText, Pencil, ShoppingCart } from "phosphor-react";
import { Card } from "./Card";
import { GTitle } from "./GTitle";
import { Layout } from "./Layout";

export function About() {
	return (
		<Layout>
			<Flex
				align="center"
				justify="space-around"
				w="full"
				py="3rem"
				direction="column"
				id="about"
				textAlign="center"
			>
				<GTitle title="Sobre a plataforma de formulários" />

				<SimpleGrid
					gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
					w="full"
					my="3rem"
					gap="3rem"
				>
					<Card
						icon={<FileText size={32} />}
						title="Como vou acessar os formulários?"
						text="Após o pagamento lhe enviaremos um e-mail com login e senha para acessar a plataforma,
						que poderá ser acessada pelo computador ou qualquer dispositivo móvel."
					/>
					<Card
						icon={<DeviceMobile size={32} />}
						title="Compatível com seus dispositivos"
						text="A plataforma centraliza todos os formulários na nuvem, onde eles podem ser consultados e
						baixados de qualquer dispositivo móvel. É didático, prático e fácil de usar."
					/>
					<Card
						icon={<ShoppingCart size={32} />}
						title="Acesso vitalício, sem mensalidades"
						text="O acesso vitalício, com direito à atualizações de novos formulários, sem mensalidades ou anuidades."
					/>
					<Card
						icon={<Pencil size={32} />}
						title="Acesso à +500 questões de concursos"
						text="Tenha acesso a mais de 500 Questões de concursos para psicólogos."
					/>
				</SimpleGrid>
			</Flex>
		</Layout>
	);
}
