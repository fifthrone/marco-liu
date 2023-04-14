"use client";

import { useState } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { CameraIcon } from "@heroicons/react/24/outline";
import PhotoSlide from "@/components/photography-card/photo-slide";
import PhotoCarousel from "@/components/photography-card/photo-carousel";

import { AnimatePresence, motion } from "framer-motion";

const PhotographyCard = () => {
	const [pop, setPop] = useState(false);

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
								<PhotoCarousel />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default PhotographyCard;
