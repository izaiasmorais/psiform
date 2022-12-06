import { Button } from "./Button";
import { Layout } from "./Layout";

export function Header() {
	return (
		<Layout>
			<header className="flex items-center justify-between px-4 py-4">
				<div className="flex gap-2 items-center">
					<img src="/psiform.png" alt="Psiform - Formulários psicológicos" />
					<strong className="font-bold text-xl text-blue-900">Psiform</strong>
				</div>

				<nav className="flex gap-8 items-center">
					<a href="#recursos">Recursos</a>
					<a href="#preco">Preço</a>
					<Button />
				</nav>
			</header>
		</Layout>
	);
}
