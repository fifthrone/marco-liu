export default function WebFrame(props) {
	const { children } = props;
	return (
		<div className="flex h-auto flex-col">
			<div className="flex h-8 flex-row items-center justify-start space-x-2 rounded-t-2xl border-x-2 border-t-2 border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900">
				<div className="ml-3 h-3 w-3 rounded-full bg-red-400" />
				<div className="ml-3 h-3 w-3 rounded-full bg-yellow-400" />
				<div className="ml-3 h-3 w-3 rounded-full bg-green-400" />
			</div>
			<div className="overflow-hidden rounded-b-2xl border-x-2 border-b-2 border-neutral-700">
				{children}
			</div>
		</div>
	);
}
