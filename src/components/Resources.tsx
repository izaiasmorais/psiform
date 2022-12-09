import { Flex } from "@chakra-ui/react";
import { Card } from "./Card";
import { Layout } from "./Layout";
import { FileDoc, Files } from "phosphor-react";

export function Resources() {
	return (
		<Flex bg="gray.50" w="full">
			<Layout>
				<Flex align="center" justify="space-around" w="full" py="3rem">
					<Card
						icon={<FileDoc size={32} />}
						title="Documentos Atualizados"
						text="São +1.000 páginas de documentos atualizados: relatórios, atestados, laudos, pareceres , declarações, anamneses, atendimento online e todos os demais tipos de documentos que precisamos para uma boa atuação profissional, incluso laudos prontos, baseados no DSM-5"
					/>
					<Card
						icon={<Files size={32} />}
						title="Deixe do seu jeito"
						text="Os documentos estão em formato Word e Google Docs o que possibilita a sua edição e personalização, após a compra é liberado um login e senha para acesso imediato."
					/>
				</Flex>
			</Layout>
		</Flex>
	);
}
