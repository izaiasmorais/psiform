import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Reports } from "./components/Reports";
import { Resources } from "./components/Resources";

function App() {
	return (
		<>
			<Header />
			<Main />
			<Resources />
			<Forms />
			<Reports />
		</>
	);
}

export default App;
