import "./globals.css";
import { Poppins, Lexend } from "next/font/google";

// const poppins = Poppins({
// 	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// 	style: ["normal", "italic"],
// 	variable: "--font-poppins",
// 	subsets: ["latin"],
// });
const lexend = Lexend({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal"],
	variable: "--font-lexend",
	subsets: ["latin"],
	// display: "swap"
});

export const metadata = {
	title: "Marco Liu",
	description: "My personal website",
	keywords: ["Marco Liu", "Fifth Tees"],
	authors: [{ name: "Marco Liu" }],
	openGraph: {
		title: "Marco Liu",
		description: "My personal website",
		url: "https://marco-liu.vercel.app",
		locale: "en-US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={lexend.className}
		>
			<body className="bg-gradient-to-brfrom-neutral-900to-black bg-neutral-800">
				{children}
			</body>
		</html>
	);
}
