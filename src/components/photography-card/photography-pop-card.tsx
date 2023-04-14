"use client";

import { Children, useState } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import { CameraIcon } from "@heroicons/react/24/outline";
import PhotoSlide from "@/components/photography-card/photo-slide";
import PhotoCarousel from "@/components/photography-card/photo-carousel";

import { AnimatePresence, motion } from "framer-motion";
import PhotoStack from "./photo-stack";

type PhotographyPopCardProps = {
	unPopCard: React.ReactNode;
	popCard: React.ReactNode;
};

export default function PhotographyPopCard(props: PhotographyPopCardProps) {
	const { unPopCard, popCard } = props;

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
								{unPopCard}
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
								{popCard}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</IlluminatedCard>
		</PopToCenterCard>
	);
}
