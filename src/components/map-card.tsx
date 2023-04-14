"use client";

import { useState } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { GlobeAmericasIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import FifthTeesDemo from "../../public/fifth-tees/fifth-tees-demo.png";
import WebFrame from "@/components/web-frame";

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
								className={`relative h-full w-full overflow-hidden p-6`}
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
										Visualizing geospatial data in Hong Kong on a 3D, interactive map.
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
								className="relative flex h-full flex-col space-y-8 overflow-y-scroll bg-neutral-900 p-4 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] sm:p-20 [&::-webkit-scrollbar]:hidden"
							>
								<div className="flex flex-col space-y-1">
									<div className="flex flex-row items-center justify-start space-x-12">
										<h1 className="text-5xl font-semibold">Fifth Tees</h1>
									</div>
									<p className="mt-2 text-lg text-neutral-400">
										A small e-commerce website for selling t-shirts and
										stickers.
									</p>
								</div>
								<WebFrame>
									<Image
										width={1280}
										height={898}
										src={FifthTeesDemo}
										alt="A screenshot from the Fifth Tees Website"
									/>
								</WebFrame>
								<p className="text-xl text-neutral-400">
									I've been designing T-Shirts Lorem ipsum dolor, sit amet
									consectetur adipisicing elit. Provident nam fugiat officiis
									odio iusto sit sint eos vero et perferendis quod, illum rerum
									ipsa, labore libero veritatis explicabo ea? Eum.
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
