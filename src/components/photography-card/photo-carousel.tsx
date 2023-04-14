"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// import Image from "next/image";
// import MountFuji from "../../../public/photography/mount-fuji.jpg";
// import Shibuya from "../../../public/photography/shibuya.jpg";
// import Dining from "../../../public/photography/dining.jpg";
// import Asakusa from "../../../public/photography/asakusa.jpg";
// import Fujiyoshida from "../../../public/photography/fujiyoshida.jpg";
// import TaiTan1 from "../../../public/photography/tai-tan-1.jpg";
// import TaiTan2 from "../../../public/photography/tai-tan-2.jpg";
// import TaiTan3 from "../../../public/photography/tai-tan-3.jpg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type PhotoCarouselProps = {
	children: React.ReactNode;
};

export default function PhotoCarousel(props: PhotoCarouselProps) {
	const { children } = props;
	const [index, setIndex] = useState(0);

	return (
		<div className="relative h-full overflow-hidden">
			<motion.div
				initial={false}
				animate={{ x: `-${index * 100}%` }}
				transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
				className="flex"
			>
				{children}
			</motion.div>
			{index > 0 ? (
				<button
					className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/50"
					onClick={() => setIndex(index - 1)}
				>
					<ChevronLeftIcon className="h-6 w-6" />
				</button>
			) : null}
			{index < 7 ? (
				<button
					className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/50"
					onClick={() => setIndex(index + 1)}
				>
					<ChevronRightIcon className="h-6 w-6" />
				</button>
			) : null}
		</div>
	);
}
