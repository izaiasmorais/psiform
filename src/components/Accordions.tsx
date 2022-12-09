import { SimpleGrid, Accordion, Text } from "@chakra-ui/react";
import { GlobalAccordion } from "./GlobalAccordion";

export function Accordions() {
	return (
		<>
			<SimpleGrid
				gridTemplateColumns="1fr 1fr"
				w="full"
				mt="3rem"
				border="none"
				gap="1rem"
			>
				<Accordion allowToggle>
					<GlobalAccordion
						title="Anamneses"
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

				<Accordion allowToggle>
					<GlobalAccordion
						title="Avaliação Vasectomia"
						description={
							<Text>
								Entrevista Psicológica Semi Dirigida – Vasectomia <br />
								Laudo Cirurgia de Vasectomia <br />
								Plano de Avaliação – Vasectomia
							</Text>
						}
					/>
				</Accordion>

				<Accordion allowToggle>
					<GlobalAccordion
						title="Avaliação bariátrica"
						description={
							<Text>
								Roteiro para Avaliação de Bariátrica <br />
								Anamnese Cirurgia Bariátrica <br />
								Laudo Cirurgia Bariátrica
							</Text>
						}
					/>
				</Accordion>

				<Accordion allowToggle>
					<GlobalAccordion
						title="TEA"
						description={
							<Text>
								ABC – Autism Behavior Checklist <br />
								ASQ-3 Roteiro e Formulários [02 á 60 Meses] <br />
								ATA – Formulário para Avaliação de Tratamentos do Autismo <br />
								CARS – Escala de Classificação de Autismo na Infância <br />
								M CHAT – Modified Checklist for Autism in Toddlers <br />
								M CHAT R/F <br />
								PEI – Plano de Ensino Individualizado <br />
								PEP R – Roteiro e Protocolo <br />
							</Text>
						}
					/>
				</Accordion>
			</SimpleGrid>

			<Accordion allowToggle w="full" mt="1rem">
				<GlobalAccordion
					title="Demais formulários atualizados"
					description={
						<Text>
							<Text fontWeight="500">Atestado Psicológico</Text>
							Atestado Psicológico – 2 tipos de modelos <br />
							Atestado de Boa Conduta <br />
							Atestado Psicológico de Sanidade Mental <br />
							<br />
							<Text fontWeight="500">Autorização</Text>
							Autorização para Atendimento Online de Menores para Consulta
							Psicológica <br />
							Autorização para Menores de 18 anos para Consulta Psicológica
							<br />
							<br />
							<Text fontWeight="500">Avaliação Risco de Suicídio</Text>
							Risco de Suicídio <br /> <br />
							<Text fontWeight="500">Atendimento e Evolução</Text>
							Registro de Atendimento e Evolução – 2 tipos de modelos <br /> <br />
							<Text fontWeight="500">Atendimento Online</Text>
							Protocolo de Atendimento Online <br /> <br />
							Autorização para Atendimento Online para Menores – 2 tipos de
							modelos <br />
							Contrato de Psicoterapia Individual Online – 2 tipos de modelos
							<br />
							<br />
							<Text fontWeight="500">Contrato Terapêutico</Text>
							Contrato de Psicoterapia Individual <br />
							Contrato Terapêutico <br />
							Contrato de Prestação de Serviços <br />
							Contrato de Prestação de Serviços – 3 tipos de modelos <br />
							Contrato de Locação de Salas <br />
							Contrato de Sublocação de Salas – 2 tipos de modelos <br />
							Convênios <br />
							Reembolso de Convênio <br />
							Solicitação de Credenciamento de Convênio <br />
							Encaminhamento <br />
							Encaminhamento Avaliação e Acompanhamento Psiquiátrico <br />
							Encaminhamento – 2 tipos de modelos <br />
							Imposto de Renda <br />
							Declaração de Renda de Profissional Liberal <br />
							Declaração de Trabalho Autônomo <br />
							Recibo de Imposto de Renda. <br />
							Parecer Psicológico <br />
							Parecer Psicológico <br />
							Recibos <br />
							Recibo – 3 Tipos de Modelos <br />
							Recibo de Entrega de Prontuário <br />
							Relatórios <br />
							Relatório Multiprofissional <br />
							Relatório Psicológico – 2 Tipos de Modelos <br />
							RH <br />
							Entrevista de Desligamento – 4 Tipos de Modelos <br />
							Entrevista Devolutiva. <br />
							Acompanhamento de Experiência de Chefia Imediata. <br />
							Acompanhamento de Experiência de Funcionário. <br />
							Acompanhamento de Experiência – 2 Tipos de Modelos <br />
							Atividade de treinamento – Avaliação e Reação. <br />
							Carta de Apresentação para Emprego. <br />
							Carta de recomendação. <br />
							Contrato de Prestação de Recrutamento e Seleção. <br />
							Contrato de prestação de Serviços de Consultoria de RH <br />
							Proposta de Consultoria de RH – 3 Tipos de Modelos <br />
							Controle de Presença – 2 Tipos de Modelos <br />
							Diagnóstico Institucional. <br />
							Gestão por Competências <br />
							TCLE <br />
							Termo de consentimento Livre e Esclarecido <br />
							Informativos <br />
							Documentos psicológicos têm prazo de validade? <br />
							Onde consta esta informação? <br />O que devo fazer quando um
							documento que não consta na resolução? <br />
							O que devo considerar para contribuir com um documento
							multiprofissional? <br />
							O que é um atestado psicológico? <br />
							O que é um laudo psicológico? <br />
							O que é um parecer psicológico? <br />
							O que é um relatório psicológico? <br />
							O que é uma declaração psicológica? <br />
							Por quanto tempo deve ser arquivado um prontuário psicológico ?
							<br />
							<br />
							Preciso fazer registro documental mesmo fazendo um relatório ou
							outro doc? <br />
							Qual a diferença entre declaração e atestado e atestado
							psicológico? <br />
							Qual a diferença entre relatório e laudo psicológico? <br />
							Qual documento escolho para solicitar uma avaliação ou para
							encaminhar uma demanda? <br />
							Que providências devem ser tomadas na entrega de um documento
							psicológico? <br />
							Quantidade de Profissionais por Estado <br />
							Tabela de Referência – CFP <br />
						</Text>
					}
				/>
			</Accordion>
		</>
	);
}
