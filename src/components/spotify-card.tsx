"use client";

import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import useSWR from "swr";
import PopToCenterCard from "./pop-to-center-card";
import IlluminatedCard from "./illuminated-card";
import { useState } from "react";
import Image from "next/image";
import GlowLink from "./glow-link";

const SpotifyCard = () => {
	const { data } = useSWR(
		"/api/last-listened",
		(url) => axios.get(url).then((res) => res.data),
		{ refreshInterval: 10000 }
	);

	const [pop, setPop] = useState();
	return (
		<PopToCenterCard
			className="h-80"
			pop={pop}
			onPopChange={setPop}
			poppedHeight={700}
			poppedWidth={400}
		>
			<IlluminatedCard pop={pop}>
				<AnimatePresence>
					{!pop && (
						<motion.div
							// initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.1 } }}
							transition={{ duration: 0.6 }}
							className={`relative h-full w-full overflow-hidden`}
						>
							<div className="flex h-full flex-col items-start justify-between p-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="168px"
									width="168px"
									version="1.1"
									viewBox="0 0 168 168"
									className="h-14 w-auto"
								>
									<path
										fill="#86efac"
										d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
									/>
								</svg>
								<div className="flex flex-col space-y-2">
									<div className="flex flex-row items-center space-x-2">
										<div className="h-1 w-1 translate-y-[1px] rounded-full bg-green-300" />
										<p className="text-smx font-light text-green-300">
											Last played
										</p>
									</div>
									<h1 className="text-2xl text-neutral-100">
										{data ? data.name : "honest (feat. moon tang)"}
									</h1>
									<h2 className="text-lg font-extralight text-neutral-400">
										{data
											? data.artists
													.map((artist: { name: string }) => artist.name)
													.join(", ")
											: "Gareth.T"}
									</h2>
								</div>
							</div>
						</motion.div>
					)}{" "}
				</AnimatePresence>
				<AnimatePresence>
					{pop && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.1 } }}
							transition={{ duration: 0.6 }}
							className="relative flex h-full flex-col overflow-y-scroll bg-neutral-900 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
						>
							<div className="flex h-full flex-col space-y-0">
								<Image
									src={data?.album.images[0].url}
									height={640}
									width={640}
									alt="album image"
									className="w-100% h-auto flex-shrink-0"
								/>
								<div className="pb-8 flex h-full flex-col justify-between space-y-4 p-6">
									<div className="flex flex-col space-y-4">
										<h1 className="text-2xl text-neutral-100">
											{data ? data.name : "honest (feat. moon tang)"}
										</h1>
										<h2 className="text-xl font-extralight text-neutral-400">
											{data
												? data.artists
														.map((artist: { name: string }) => artist.name)
														.join(", ")
												: "Gareth.T"}
										</h2>
									</div>
									<GlowLink href={data?.external_urls.spotify}>
										Listen on Spotify
									</GlowLink>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default SpotifyCard;
