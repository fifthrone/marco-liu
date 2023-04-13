"use client";

import { useState } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { BuildingStorefrontIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import FifthTeesDemo from "../../public/fifth-tees/fifth-tees-demo.png";
import Landing from "../../public/fifth-tees/landing.png";
import WebFrame from "@/components/web-frame";

import CoffeeMattersTshirtMasked from "../../public/fifth-tees/coffeeMattersTshirtMasked.png";
import DogtorTshirtMasked from "../../public/fifth-tees/dogtorTshirtMasked.png";
import FriendsBeerTshirtMasked from "../../public/fifth-tees/friendsBeerTshirtMasked.png";
import GlowLink from "@/components/glow-link";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const FifthTeesCard = (props) => {
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
								className={`relative h-full w-full overflow-hidden p-4 px-6`}
							>
								<motion.div
									className="absolute inset-0"
									initial={{ x: 20, y: 100, opacity: 0 }}
									animate={{ x: 0, y: 0, opacity: 1 }}
									transition={{ type: "spring" }}
								>
									<Image
										height={350}
										width={330}
										className="absolute -bottom-10 left-8 h-[300px] w-auto rotate-[-12deg] drop-shadow"
										alt="Coffee matters t-shirt"
										style={{
											filter: "drop-shadow(0 15px 25px rgb(0 0 0 / 0.8))",
										}}
										src={CoffeeMattersTshirtMasked}
									/>
								</motion.div>
								<motion.div
									className="absolute inset-0"
									initial={{ x: -20, y: 100, opacity: 0 }}
									animate={{ x: 0, y: 0, opacity: 1 }}
									transition={{ type: "spring" }}
								>
									<Image
										height={350}
										width={330}
										className="absolute -bottom-32 left-44 h-[310px] w-auto rotate-[12deg] drop-shadow"
										alt="Coffee matters t-shirt"
										src={DogtorTshirtMasked}
										style={{
											filter: "drop-shadow(0 5px 25px rgb(0 0 0 / 0.8))",
										}}
									/>
								</motion.div>

								<div className="absolute top-12 left-[450px] h-14 w-14 rotate-[10deg]">
									<svg
										// width="160"
										// height="160"
										viewBox="0 0 160 160"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
											fill="#FFFFFF"
										/>
									</svg>
								</div>
								<div className="absolute top-24 left-[490px] h-8 w-8 rotate-[10deg]">
									<svg
										// width="160"
										// height="160"
										viewBox="0 0 160 160"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
											fill="#ECECEC"
										/>
									</svg>
								</div>

								<div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-0">
									<div className="borderx flex flex-row items-center space-x-3">
										<BuildingStorefrontIcon className="text-green-500x h-5 w-5 text-neutral-100" />
										<h2 className="text-green-500x text-2xl font-medium text-neutral-100 ">
											Fifth Tees
										</h2>
									</div>
									<p className="borderx relative font-extralight leading-8 text-neutral-400">
										A small e-commerce website
									</p>
								</div>
								<h1 className="mt-2 w-fit rounded-full border border-orange-600/75 px-2 text-xs font-light text-orange-600">
									Porfolio
								</h1>
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
								className="relative flex h-full flex-col space-y-6 overflow-y-scroll bg-neutral-900 p-4 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] sm:space-y-12 sm:p-20 [&::-webkit-scrollbar]:hidden"
							>
								<div className="mt-12 flex flex-col space-y-4 sm:px-12">
									<div className="flex flex-col items-start justify-start space-x-0 space-y-2 sm:flex-row sm:items-center sm:space-x-12 sm:space-y-0">
										<h1 className="text-4xl font-semibold sm:text-5xl">
											Fifth Tees
										</h1>
										<GlowLink>Check it out</GlowLink>
									</div>
									<p className="text-md mt-2 text-neutral-400 sm:text-lg">
										A small e-commerce website for selling t-shirts and
										stickers. Built with Next.js, React, Redux Toolkit, Tailwind
										CSS, and Firebase.
									</p>
								</div>

								<WebFrame>
									<Image
										width={1000}
										// height={898}
										src={FifthTeesDemo}
										alt="A screenshot from the Fifth Tees Website"
									/>
								</WebFrame>
								<p className="text-md font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									Fifth Tees is an e-commerce website where I showcase my
									t-shirt designs, which I've been selling on print-on-demand
									websites. I decided to challenge myself and build the website
									from scratch. It's built using Next.js, React, Redux Toolkit,
									Tailwind CSS, and Firebase. The site includes features like
									user authentication, light and dark mode, as well as
									persisting user cart and wishlist items between sign-in
									sessions. Throughout the journey of building this app, I've
									gained a solid understanding of concepts like server and
									client components, state management, and I've generally had a
									lot of fun.
								</p>
								<WebFrame>
									<Image
										width={1000}
										// height={898}
										src={Landing}
										alt="A screenshot from the Fifth Tees Website"
									/>
								</WebFrame>
								<p className="text-md pb-40 font-light leading-relaxed text-neutral-400 sm:px-12 sm:text-xl sm:leading-relaxed">
									One of the biggest challenges I faced was building the landing
									page. It involved sticky positioning, background transitions,
									staggered fade-in and fade-out transitions on scroll, and
									floating stickers with varying scroll speeds to create a
									parallax effect. It took a significant amount of time to make
									all the animations work well together and ensure that the
									components were reusable to prevent code duplication. If I
									were to build it again, I would definitely use the Framer
									Motion library. This is because it offers much more control
									over scroll behavior with just a few lines of code.
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default FifthTeesCard;
