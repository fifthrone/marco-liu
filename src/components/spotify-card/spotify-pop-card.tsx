"use client";

import { useState } from "react";
import PopToCenterCard from "../pop-to-center-card";
import IlluminatedCard from "../illuminated-card";
import { motion, AnimatePresence } from "framer-motion";

type SpotifyPopCardProps = {
	unPopCard: React.ReactNode;
	popCard: React.ReactNode;
};

export default function SpotifyPopCard(props: SpotifyPopCardProps) {
	const { unPopCard, popCard } = props;
	const [pop, setPop] = useState(false);

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
							className="relative flex h-full flex-col overflow-y-scroll rounded-[30px] bg-neutral-900 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
						>
							{popCard}
						</motion.div>
					)}
				</AnimatePresence>
			</IlluminatedCard>
		</PopToCenterCard>
	);
}
