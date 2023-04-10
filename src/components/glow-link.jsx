import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function GlowLink(props) {
	const { children } = props;

	return (
		<Link href="https://fifth-tees.vercel.app/" className="group-button relative w-fit">
			<div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 blur-lg group-button-hover:opacity-100 duration-300"></div>
			<div className="flex-rol border-4x relative flex w-fit items-center justify-center space-x-1 overflow-hidden rounded-full border-purple-800 bg-purple-700 p-2 px-4 text-white group-button-hover:scale-105 duration-300">
				<div className="absolute -bottom-2 h-6 w-28 rounded-xl bg-purple-300 blur-lg"></div>
				<h2 className="relative">{children}</h2>
				<ArrowUpRightIcon className="h-5 w-5" />
			</div>
		</Link>
	);
}
