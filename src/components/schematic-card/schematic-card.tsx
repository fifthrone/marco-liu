"use client";

import { useState, useEffect } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import WebFrame from "@/components/web-frame";
import DrawingTools from "@/components/schematic-card/drawing-tools";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const SchematicCard = () => {
	const [pop, setPop] = useState(false);
	const [show, setShow] = useState(true);

	return (
		<PopToCenterCard
			className="h-full"
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
								className={`h-full w-full`}
							>
								<div
									className="space-y-1x relative flex h-full flex-col justify-end p-6"
									style={{
										backgroundImage:
											"radial-gradient(#525252 1px, transparent 0)",
										backgroundSize: "40px 40px",
										backgroundPosition: "-8px -5px",
									}}
								>
									{show && (
										<>
											<svg
												className="absolute inset-0 h-full w-full blur"
												viewBox="0 0 1000 800"
											>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
													}}
													points="-400,400 120,400"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
														delay: 0.8,
													}}
													points="145,350 145,150"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
														delay: 1.6,
													}}
													points="230,400 340,400 340,365 450,365"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
														delay: 2.4,
													}}
													points="560,365 630,365 630,150"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.6,
														delay: 3.2,
													}}
													points="560,405 940,405 940,180"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.g
													className="translate-x-[120px] translate-y-[350px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 0.4,
													}}
												>
													<rect
														x="0"
														y="0"
														width="110"
														height="70"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="25,0, 25,30 85,30 85,0"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,50, 110,50"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="70,0, 70,10 95,10 95,0"
														className="fill-green-500 stroke-green-500 stroke-2"
													/>
													<circle
														cx="0"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="110"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="25"
														cy="0"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>
												<motion.g
													className="translate-x-[115px] translate-y-[100px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 1.2,
													}}
												>
													<polygon
														points="0,0 60,0 30,50"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<circle
														cx="30"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>
												<motion.g
													className="translate-x-[450px] translate-y-[350px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 2.0,
													}}
												>
													<rect
														x="0"
														y="0"
														width="110"
														height="70"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,15 20,15 90,55 110,55"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,55 20,55 90,15 110,15"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,50 15,50 15,60 0,60"
														className="fill-green-500 stroke-green-500 stroke-2"
													/>
													<circle
														cx="0"
														cy="15"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="110"
														cy="15"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="110"
														cy="55"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>
												<motion.g
													className="translate-x-[600px] translate-y-[100px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 2.8,
													}}
												>
													<polygon
														points="0,0 60,0 30,50"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<circle
														cx="30"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>
												<motion.g
													className="translate-x-[940px] translate-y-[80px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 3.8,
													}}
												>
													<polygon
														points="0,0 25,25 25,75 0,100"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<circle
														cx="0"
														cy="100"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>
											</svg>
											<svg
												className="absolute inset-0 h-full w-full"
												viewBox="0 0 1000 800"
											>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
													}}
													points="-400,400 120,400"
													className="fill-none stroke-green-500 stroke-2"
												/>

												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
														delay: 0.8,
													}}
													points="145,350 145,150"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
														delay: 1.6,
													}}
													points="230,400 340,400 340,365 450,365"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.4,
														delay: 2.4,
													}}
													points="560,365 630,365 630,150"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.polyline
													initial={{ pathLength: 0 }}
													animate={{ pathLength: 1 }}
													transition={{
														duration: 0.6,
														delay: 3.2,
													}}
													points="560,405 940,405 940,180"
													className="fill-none stroke-green-500 stroke-2"
												/>
												<motion.g
													className="translate-x-[120px] translate-y-[350px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 0.4,
													}}
												>
													<rect
														x="0"
														y="0"
														width="110"
														height="70"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="25,0, 25,30 85,30 85,0"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,50, 110,50"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="70,0, 70,10 95,10 95,0"
														className="fill-green-500 stroke-green-500 stroke-2"
													/>
													<circle
														cx="0"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="110"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="25"
														cy="0"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>

												<motion.g
													className="translate-x-[115px] translate-y-[100px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 1.2,
													}}
												>
													<polygon
														points="0,0 60,0 30,50"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<circle
														cx="30"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>

												<motion.g
													className="translate-x-[450px] translate-y-[350px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 2.0,
													}}
												>
													<rect
														x="0"
														y="0"
														width="110"
														height="70"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,15 20,15 90,55 110,55"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,55 20,55 90,15 110,15"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<polyline
														points="0,50 15,50 15,60 0,60"
														className="fill-green-500 stroke-green-500 stroke-2"
													/>
													<circle
														cx="0"
														cy="15"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="110"
														cy="15"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
													<circle
														cx="110"
														cy="55"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>

												<motion.g
													className="translate-x-[600px] translate-y-[100px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 2.8,
													}}
												>
													<polygon
														points="0,0 60,0 30,50"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<circle
														cx="30"
														cy="50"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>

												<motion.g
													className="translate-x-[940px] translate-y-[80px]"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{
														duration: 0.4,
														delay: 3.8,
													}}
												>
													<polygon
														points="0,0 25,25 25,75 0,100"
														className="fill-none stroke-green-500 stroke-2"
													/>
													<circle
														cx="0"
														cy="100"
														r="10"
														className="fill-green-500 stroke-neutral-900 stroke-[8px]"
													/>
												</motion.g>
											</svg>
										</>
									)}

									{/* <PencilIcon className="mb-2 h-5 w-5 text-neutral-100" /> */}
									<h1 className="mb-2 w-fit rounded-full border border-orange-600/75 px-2 text-xs font-light text-orange-600">
										Porfolio
									</h1>
									<h2 className="mb-1 text-2xl font-medium text-neutral-100">
										Schematic Drawing Tools
									</h2>
									<p className="font-extralight text-neutral-500">
										An interactive node-based web apps for drawing schematics
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
								className="relative flex h-full flex-col space-y-6 overflow-y-scroll rounded-[30px] bg-neutral-900 p-4 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] sm:space-y-12 sm:p-20 [&::-webkit-scrollbar]:hidden"
							>
								<div className="mt-12 flex flex-col space-y-1 sm:px-12">
									<h1 className="text-4xl font-semibold sm:text-5xl">
										Schematic Drawing Tools
									</h1>
									<p className="text-md mt-2 text-neutral-400 sm:text-lg">
										An interactive node-based web apps for drawing schematics.
										Built with React, React Flow, Zustand and Tailwind CSS.
									</p>
									<div className="md:text-md w-fit rounded-xl border border-zinc-700 bg-zinc-800 p-1 px-2 text-sm text-zinc-500">
										Work in Progress
									</div>
								</div>
								<div>
									<p className="sm:text-md mb-1 text-sm font-light text-neutral-400 sm:px-12">
										Here&apos;s a little demo (support desktop only):
									</p>
									<WebFrame>
										<DrawingTools />
									</WebFrame>
								</div>
								<p className="text-md font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									Building a web app has been one of the main goals on my
									frontend development journey. I&apos;ve been inspired by web
									apps like Spline and Canva, which are as good as, or even
									better than, traditional computer applications in some ways.
									Features such as auto-save, platform independence, and easy
									access from any device with an internet connection make these
									apps stand out.
								</p>
								<p className="text-md font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									With that in mind, I challenged myself to create a schematic
									drawing web app. I&apos;ve used software like Microsoft Visio
									in the past, but I found that it&apos;s designed for general
									purposes and isn&apos;t as effective for specific tasks like
									schematic drawing.
								</p>
								<p className="text-md font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									To build the app, I utilized the powerful React Flow library,
									which is great for creating node-based editors and offers a
									lot of control and flexibility. I also developed custom
									functions not included in React Flow, such as rotating and
									flipping shapes, as well as snap helper lines. One of my
									favorite features is the toolbar menu I added next to a shape,
									which allows users to quickly add a auto-connected neighbour
									shapes with a single click.
								</p>
								<p className="text-md pb-40 font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									Additionally, I experimented with Zustand, a lightweight
									state-management library, and I&apos;m quite happy with the
									results so far. With the basic functions I&apos;ve
									implemented, I can already draw diagrams containing tens or
									hundreds of shapes in just a matter of minutes.
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default SchematicCard;
