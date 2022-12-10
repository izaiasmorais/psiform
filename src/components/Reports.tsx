import { Accordion, Flex, Link, Text } from "@chakra-ui/react";
import { GButton } from "./GButton";
import { GAccordion } from "./GAccordion";
import { GTitle } from "./GTitle";
import { Layout } from "./Layout";

export function Reports() {
	return (
		<Flex bg="gray.50">
			<Layout>
				<Flex
					w="full"
					align="center"
					justify="center"
					py="3rem"
					direction="column"
				>
					<GTitle title="Laudos prontos baseados no DSM.5" />

					<Accordion allowToggle mt="2rem" w="full">
						<GAccordion
							title="Laudos prontos (baseados no DSM.5)"
							description={
								<Text>
									Anamnese Adulto <br />
									Anamnese Adolescente <br />
									Anamnese Infantil <br />
									Anamnese Cirurgia Bariátrica <br />
									Anamnese Compulsão Alimentar <br />
									Anamnese Neuropsicológica Adulto <br />
									Anamnese Neuropsicológica Infantil <br />
									Anamnese Orientação Profissional <br />
									Anamnese Psicomotricidade <br />
									Anamnese TCCAnamnese Terapêutica
								</Text>
							}
						/>
					</Accordion>

					<Flex gap="1.5rem" w="full" mt="2rem">
						<GButton
							isWhite={false}
							text="Visualizar Modelo Laudo - DSM.5"
							link="https://psiform.com.br/wp-content/uploads/2022/07/Disforia-de-Genero.docx.pdf"
							w="full"
							h="49px"
						/>

						<GButton
							isWhite={false}
							text="Visualizar Modelo Anamnese"
							link="https://psiform.com.br/wp-content/uploads/2022/07/Anamnese-Adulto.docx.pdf"
							w="full"
							h="49px"
						/>
					</Flex>
				</Flex>
			</Layout>
		</Flex>
	);
}
