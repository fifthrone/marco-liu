"use client";

import { useState, useEffect, useReducer } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import MountFuji from "../../public/photography/mount-fuji.jpg";
import Shibuya from "../../public/photography/shibuya.jpg";
import Dining from "../../public/photography/dining.jpg";
import Asakusa from "../../public/photography/asakusa.jpg";
import Fujiyoshida from "../../public/photography/fujiyoshida.jpg";
import TaiTan1 from "../../public/photography/tai-tan-1.jpg";
import TaiTan2 from "../../public/photography/tai-tan-2.jpg";
import TaiTan3 from "../../public/photography/tai-tan-3.jpg";
import PhotoSlide from "@/components/photo-slide";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const PhotographyCard = (props) => {
	const [pop, setPop] = useState(false);
	const [index, setIndex] = useState(0);

	const photoStack = [MountFuji, Shibuya, Dining, Asakusa, Fujiyoshida, TaiTan1, TaiTan2, TaiTan3];

	return (
		<PopToCenterCard
			className="h-80"
			pop={pop}
			onPopChange={setPop}
			poppedHeight={900}
			poppedWidth={604}
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
									<PhotoSlide />

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
								className="h-full"
								// className="relative flex h-full flex-col space-y-8 overflow-y-scroll bg-neutral-900 p-4 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] sm:p-20 [&::-webkit-scrollbar]:hidden"
							>
								<div className="relative h-full overflow-hidden">
									<motion.div
										initial={false}
										animate={{ x: `-${index * 100}%` }}
										transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
										className="flex"
									>
										{photoStack.map((photo, i) => (
											<div className="h-[min(calc(100vh-8px),900px)] w-[min(calc(100vw-8px),600px)] flex-shrink-0">
												<Image
													width={1000}
													key={i}
													src={photo}
													alt="photo"
													className="aspect-[2/3] h-full w-full object-contain"
												/>
											</div>
										))}
									</motion.div>
									{index > 0 ? (
										<button
											className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/50"
											onClick={() => setIndex(index - 1)}
										>
											<ChevronLeftIcon className="h-6 w-6" />
										</button>
									) : null}
									{index < photoStack.length - 1 ? (
										<button
											className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/50"
											onClick={() => setIndex(index + 1)}
										>
											<ChevronRightIcon className="h-6 w-6" />
										</button>
									) : null}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default PhotographyCard;
