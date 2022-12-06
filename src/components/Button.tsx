interface ButtonProps {
	text: string;
	isWhite: boolean;
}

export function Button({ text, isWhite }: ButtonProps) {
	const styles = isWhite
		? "text-blue-900 bg-transparent border-blue-900 hover:text-white hover:bg-blue-900"
		: "text-white bg-blue-900 border-blue-900 hover:text-blue-900 hover:bg-white";

	return (
		<button
			className={`border-2	px-4 py-2 rounded-full transition-colors ${styles}`}
		>
			{text}
		</button>
	);
}
