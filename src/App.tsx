import { About } from "./components/About";
import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Pricing } from "./components/Pricing";
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
			<About />
			<Pricing />
		</>
	);
}

export default App;
