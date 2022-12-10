import { Accordion, Box, Flex, Link, Text } from "@chakra-ui/react";
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
					<GTitle title="Laudos Prontos e Baseados no DSM.5" />

					<Accordion allowToggle mt="2rem" w="full">
						<GAccordion
							title="Laudos prontos (baseados no DSM.5)"
							description={
								<Box>
									<Text fontWeight="500">• Modelo de Laudos + Utilizados</Text>
									<br />
									Laudo Psicológico – Modelo Base <br />
									Laudo Cirurgia Bariátrica <br />
									Laudo Cirurgia de Vasectomia <br />
									Laudo Concurso Público <br />
									Laudo Indenização por Abandono Afetivo <br />
									Laudo Laqueadura Tubária <br />
									Laudo Piloto / Comissário Aeronaves <br />
									Laudo Psicossocial <br />
									<br />
									<Text fontWeight="500">
										• Modelos de Laudos Prontos Baseados no DSM-5
									</Text>
									<br />
									Ansiedade <br />
									Ataque de Raiva <br />
									Autismo <br />
									Dificuldades Acadêmicas <br />
									Disforia de Gênero <br />
									Disfunção Sexual <br />
									Esquizofrenia <br />
									Ideação Suicida <br />
									Inquieto e Distraído <br />
									Luto e Depressão <br />
									Oscilação de Humor <br />
									Paranóia e Alucinações <br />
									Psicose <br />
									Psicótico e Triste <br />
									Síndrome das Pernas Inquietas <br />
									Transtorno Alimentar Restritivo Evitativo <br />
									Transtorno Bipolar <br />
									Transtorno Bipolar e Transtorno Relacionado Induzido por
									Esteroide <br />
									Transtorno Ciclotímico <br />
									Transtorno de Ansiedade Social <br />
									Transtorno de Arrancar os Cabelos – TRICOTILOMANIA <br />
									Transtorno de Compulsão Alimentar – TCA <br />
									Transtorno de Déficit de Atenção Hiperatividade – TDAH <br />
									Transtorno de Estresse Pós- Traumático <br />
									Transtorno de Interação Social Desinibida – TISD <br />
									Transtorno de Jogo <br />
									Transtorno de Pânico <br />
									Transtorno de Personalidade Borderline <br />
									Transtorno de Personalidade Antissocial – TPA <br />
									Transtorno de Sintomas Somáticos – TSS <br />
									Transtorno de Estresse Agudo <br />
									Transtorno Depressivo Persistente – Distimia <br />
									Transtorno Explosivo Intermitente – TEI <br />
									Transtorno Obsessivo Compulsivo – TOC <br />
									Transtorno por Uso do Álcool <br />
								</Box>
							}
						/>
					</Accordion>

					<Flex
						gap="1.5rem"
						w="full"
						mt="2rem"
						direction={["column", "column", "row"]}
					>
						<GButton
							isWhite={false}
							text="Visualizar Modelo Laudo - DSM.5"
							title="Visualizar Modelo Laudo - DSM.5"
							id="visualizar-modelo-laudo-dsm-5"
							aria-label="visualizar-modelo-laudo-dsm-5"
							link="https://psiform.com.br/wp-content/uploads/2022/07/Disforia-de-Genero.docx.pdf"
							w="full"
							h="49px"
						/>

						<GButton
							isWhite={false}
							text="Visualizar Modelo Anamnese"
							title="Visualizar Modelo Anamnese"
							id="visualizar-modelo-anamnese"
							aria-label="visualizar-modelo-anamnese"
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
