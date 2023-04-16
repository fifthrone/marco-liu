"use client";

import { useState } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { GlobeAmericasIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import WebFrame from "@/components/web-frame";

import MapDemo from "../../public/3d-map/demo.png";
import Map from "../../public/3d-map/map.png";

import GlowLink from "@/components/glow-link";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MapCard = () => {
	const [pop, setPop] = useState(false);

	return (
		<PopToCenterCard
			className="h-80"
			pop={pop}
			onPopChange={setPop}
			poppedHeight={900}
		>
			<IlluminatedCard pop={pop}>
				<div className="relative h-full w-full">
					<AnimatePresence>
						{!pop && (
							<motion.div
								// initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.1 } }}
								transition={{ duration: 0.6 }}
								className={`relative h-full w-full overflow-hidden rounded-[30px] p-6`}
							>
								<Image
									src={Map}
									alt="map"
									className="absolute inset-0 -translate-y-6 opacity-75"
								/>
								<div className="space-y-2x relative flex h-full w-52 flex-col justify-center">
									{/* <GlobeAmericasIcon className="mb-2 h-7 w-7 text-neutral-100" /> */}
									<h1 className="mb-2 w-fit rounded-full border border-orange-600/75 px-2 text-xs font-light text-orange-600">
										Porfolio
									</h1>

									<h2 className="mb-1 text-2xl font-medium text-neutral-100">
										3D Data Visualization
									</h2>
									<p className="bg-black/50x font-light text-neutral-500">
										Visualizing geospatial data in Hong Kong on a 3D,
										interactive map.
									</p>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{pop && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.1 } }}
								transition={{ duration: 0.6 }}
								className="relative flex h-full flex-col space-y-8 overflow-y-scroll rounded-[30px] bg-neutral-900 p-4 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] sm:p-20 [&::-webkit-scrollbar]:hidden"
							>
								<div className="mt-12 flex flex-col space-y-1 sm:px-12">
									<h1 className="text-4xl font-semibold sm:text-5xl">
										3D Data Visualization
									</h1>
									<p className="text-md mt-2 text-neutral-400 sm:text-lg">
										Visualizing geospatial data in Hong Kong on a 3D,
										interactive map. Built with Vite, React, Deck.gl.
									</p>
									<div className="md:text-md w-fit rounded-xl border border-zinc-700 bg-zinc-800 p-1 px-2 text-sm text-zinc-500">
										Work in Progress
									</div>
								</div>
								<WebFrame>
									<Image
										width={1280}
										height={898}
										src={MapDemo}
										alt="A screenshot from 3D Data Visualization"
									/>
								</WebFrame>
								<p className="text-md font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									Recently, I&apos;ve been working on a project where I created
									a website that displays a 3D map for exploring geospatial
									data. I used tools like Vite, React, and Deck.gl to bring it
									all together. WebGL is the technology that make 3D graphics
									possible on websites, it utilizes the computer&apos;s GPU to
									render complex graphics efficiently and smoothly. I also used
									Deck.gl, a WebGL framework created by Uber. It takes care of
									the coordinate systems, ensuring the precision and correctness
									of the locations on the map . A 3D map offers a much more
									enjoyable and engaging experience compared to a simple 2D one
									beacuse it allows user to explore with different perspective.
								</p>
								<p className="text-md font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									To construct my app, I used geojson data for building heatmap
									layer with depth and added some features like dynamic lighting
									and a camera to make the map more relistic. To further enhance
									the user experience, I included tooltips that provide
									additional information when you hover over specific points or
									regions on the map.
								</p>
								<p className="text-md font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									While working on this project, I&apos;ve learned more about
									geospatial data visualization and the technologies that make
									it possible. It&apos;s been an incredible journey, and
									I&apos;m surprised with how all these tools and libraries have
									come together to create a unique and captivating experience
									for users.
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default MapCard;
