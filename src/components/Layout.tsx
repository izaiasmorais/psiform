import { ReactNode } from "react"

interface LayoutProps {
	children: ReactNode;
}

export function Layout({children}: LayoutProps) {
	return (
		<div className="w-full max-w-[1120px] my-0 mx-auto">
			{children}
		</div>
	)
}
