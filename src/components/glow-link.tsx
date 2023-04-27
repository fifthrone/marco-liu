import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type GlowLinkProps = {
	children: React.ReactNode;
	href: string;
};

export default function GlowLink(props: GlowLinkProps) {
	const { children, href } = props;

	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group-button relative w-fit"
		>
			<div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 blur-lg duration-300 group-button-hover:opacity-100"></div>
			<div className="flex-rol border-4x relative flex w-fit items-center justify-center space-x-1 overflow-hidden rounded-full border-purple-800 bg-purple-700 p-2 px-4 text-white duration-300 group-button-hover:scale-105">
				<div className="absolute -bottom-2 h-6 w-28 rounded-xl bg-purple-300 blur-lg"></div>
				<h2 className="relative">{children}</h2>
				<ArrowUpRightIcon className="h-5 w-5" />
			</div>
		</Link>
	);
}
