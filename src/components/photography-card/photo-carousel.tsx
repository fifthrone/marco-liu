"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import MountFuji from "../../../public/photography/mount-fuji.jpg";
import Shibuya from "../../../public/photography/shibuya.jpg";
import Dining from "../../../public/photography/dining.jpg";
import Asakusa from "../../../public/photography/asakusa.jpg";
import Fujiyoshida from "../../../public/photography/fujiyoshida.jpg";
import TaiTan1 from "../../../public/photography/tai-tan-1.jpg";
import TaiTan2 from "../../../public/photography/tai-tan-2.jpg";
import TaiTan3 from "../../../public/photography/tai-tan-3.jpg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function PhotoCarousel() {
	const [index, setIndex] = useState(0);

	const photoStack = [
		MountFuji,
		Shibuya,
		Dining,
		Asakusa,
		Fujiyoshida,
		TaiTan1,
		TaiTan2,
		TaiTan3,
	];

	return (
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
	);
}
