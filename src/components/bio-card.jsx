import Image from "next/image";
import Link from "next/link";

import marcoLiuIcon from "../../public/marco-liu.png";

export default function BioCard() {
	return (
		<div className="group relative h-full">
			<div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-amber-400 via-green-400 to-purple-500 opacity-50 blur-md duration-500 group-hover:opacity-100"></div>
			<div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-amber-400 via-green-400 to-purple-500 opacity-75 blur-3xl duration-500 group-hover:opacity-100"></div>
			<div className="relative w-full overflow-hidden rounded-[30px] border border-neutral-500/30 bg-black p-6 shadow-sm backdrop-blur">
				<Image
					className="static mb-6 sm:mb-0 -bottom-2 left-6 h-auto w-20 sm:absolute sm:w-44"
					src={marcoLiuIcon}
					alt="Marco"
				/>
				<h2 className="text-2xl sm:text-3xl font-medium leading-4 text-white sm:ml-52">
					Hi! I'm Marco
				</h2>
				<h2 className="mt-2 sm:mt-0 text-xl sm:text-2xl font-normal text-neutral-500 sm:ml-52">
					I'm interested in react, framer motion, three.js and building cool
					stuff.
				</h2>
				<div className="mt-6 flex flex-row items-center text-white sm:ml-52 flex-wrap gap-2">
					<Link
						href={"mailto:marco531531@gmail.com"}
						className="flex flex-row items-center space-x-2 rounded-xl bg-yellow-400/20 p-2 px-3 text-yellow-400 duration-300 hover:-translate-y-0.5 hover:bg-yellow-400/30 hover:text-yellow-300"
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
						>
							<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
						</svg>

						<h2 className="text-sm">Email</h2>
					</Link>
					<Link
						href={"https://www.linkedin.com/in/liu-wing-hin/"}
						className="flex flex-row items-center space-x-2 rounded-xl bg-yellow-400/20 p-2 px-3 text-yellow-400 duration-300 hover:-translate-y-0.5 hover:bg-yellow-400/30 hover:text-yellow-300"
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 448 512"
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
						>
							<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
						</svg>

						<h2 className="text-sm">LinkedIn</h2>
					</Link>
					<Link
						href={"https://github.com/fifthrone"}
						className="flex flex-row items-center space-x-2 rounded-xl bg-yellow-400/20 p-2 px-3 text-yellow-400 duration-300 hover:-translate-y-0.5 hover:bg-yellow-400/30 hover:text-yellow-300"
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 98 96"
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
						>
							<path
								// fill-rule="evenodd"
								// clip-rule="evenodd"
								d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
							/>
						</svg>

						<h2 className="text-sm">GitHub</h2>
					</Link>
				</div>
			</div>
		</div>
	);
}
