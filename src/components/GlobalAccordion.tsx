import {
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
} from "@chakra-ui/react";
import { Plus, Minus } from "phosphor-react";
import { ReactNode, useState } from "react";

interface GlobalAccordionProps {
	title: string;
	description: ReactNode;
}

export function GlobalAccordion({ title, description }: GlobalAccordionProps) {
	const [isOpen, setIsOpen] = useState(false);
	const shadow =
		"rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";

	return (
		<AccordionItem
			border="none"
			borderRadius="1rem"
			p=".2rem"
			bg="white"
			boxShadow={shadow}
			_hover={{ bgColor: "#fafafa" }}
		>
			<h2>
				<AccordionButton
					_hover={{ bg: "transparent" }}
					onClick={() => setIsOpen(!isOpen)}
				>
					<Box
						flex="1"
						textAlign="left"
						display="flex"
						alignItems="center"
						gap=".5rem"
					>
						{isOpen ? <Minus size={20} /> : <Plus size={20} />}
						<Text as="h4" fontSize="lg" fontWeight="500">
							{title}
						</Text>
					</Box>
				</AccordionButton>
			</h2>

			<AccordionPanel pb={4}>{description}</AccordionPanel>
		</AccordionItem>
	);
}
