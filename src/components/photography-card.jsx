"use client";

import { useState, useEffect, useReducer } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import FifthTeesDemo from "../../public/fifth-tees/fifth-tees-demo.png";
import WebFrame from "@/components/web-frame";
import MountFuji from "../../public/photography/mount-fuji.jpg";
import Shibuya from "../../public/photography/shibuya.jpg";
import Dining from "../../public/photography/dining.jpg";
import Asakusa from "../../public/photography/asakusa.jpg";
import Fujiyoshida from "../../public/photography/fujiyoshida.jpg";

import GlowLink from "@/components/glow-link";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

function reducer(state, action) {
	if (action.type === "add") {
		return state + 1;
	}
	throw Error("Unknown action.");
}

const PhotographyCard = (props) => {
	const [pop, setPop] = useState(false);
	const [offset, dispatch] = useReducer(reducer, 0);

	const photoStack = [MountFuji, Shibuya, Dining, Asakusa, Fujiyoshida];

	const styles = {
		0: {
			x: -336,
			scale: 0.75,
			opacity: 0,
			// transitionEnd: { opacity: 1 },
		},
		1: {
			x: -168,
			scale: 0.75,
			opacity: 1,
		},
		2: {
			x: 0,
			scale: 1,
			opacity: 1,
		},
		3: {
			x: 168,
			scale: 0.75,
			opacity: 1,
		},
		4: {
			x: 336,
			scale: 0.75,
			opacity: 0,
			// transitionEnd: { opacity: 0 },
		},
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			dispatch({ type: "add" });
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<PopToCenterCard
			className="h-80"
			pop={pop}
			onPopChange={setPop}
			poppedHeight={800}
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
								className={`relative h-full w-full overflow-hidden`}
							>
								<div className="absolute bottom-0 right-0 left-0 h-6 rounded-full bg-sky-500 opacity-75 blur-3xl"></div>
								<div className="relative flex h-full flex-col items-center justify-center space-y-4">
									<div className="relative h-60 w-full overflow-hidden">
										{photoStack.map((photo, index) => (
											<motion.div
												initial={false}
												animate={styles[(index + offset) % 5]}
												transition={{ duration: 1, ease: "easeInOut" }}
												key={index}
												className="absolute flex h-full w-full items-center justify-center"
											>
												<Image
													width={100}
													height={150}
													src={photo}
													alt="photo"
													className="h-auto w-40 rounded-2xl"
												/>
											</motion.div>
										))}
									</div>

									<div className="relative flex flex-row items-center justify-center space-x-2">
										<CameraIcon className="h-6 w-6 text-neutral-100" />
										<h2 className="relative text-xl font-medium text-neutral-100">
											Photography
										</h2>
									</div>
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
										<GlowLink>Check it out</GlowLink>
									</div>
									<p className="mt-2 text-lg text-neutral-400">
										A small e-commerce website for selling t-shirts and
										stickers.
									</p>
								</div>
								<WebFrame>
									<Image
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

export default PhotographyCard;
