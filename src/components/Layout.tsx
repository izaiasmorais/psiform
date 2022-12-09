import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<Flex w="full" maxW={1120} mx="auto" my="0" color="blue.900">
			{children}
		</Flex>
	);
}
