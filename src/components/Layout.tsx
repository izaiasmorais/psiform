import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<Flex w="100%" maxW={1120} mx="auto" my="0">
			{children}
		</Flex>
	);
}
