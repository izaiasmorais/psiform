import {
	Button,
	Flex,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { List } from "phosphor-react";
import { GButton } from "./GButton";

export function HeaderMenu() {
	return (
		<Menu>
			<MenuButton
				as={Button}
				bg="transparent"
				_focus={{ bg: "transparent" }}
				_hover={{ bg: "transparent" }}
				_active={{ bg: "transparent" }}
			>
				<List size={30} />
			</MenuButton>

			<MenuList bg="white" border="none" px="2" py="4" borderRadius="1rem">
				<MenuItem _focus={{ bg: "transparent" }} bg="transparent" mb="1">
					<Link
						w="100%"
						textDecoration="none"
						fontSize="1rem"
						href="https://psiform.com.br/digital/"
					>
						Anamnese digital
					</Link>
				</MenuItem>

				<Flex p="2">
					<GButton
						link="https://acesso.psiform.com.br/logar"
						isWhite={false}
						text="Área de membros"
					/>
				</Flex>
			</MenuList>
		</Menu>
	);
}
