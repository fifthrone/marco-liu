"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";

import {
	AnimatePresence,
	motion,
	useMotionValue,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";

const PopToCenterCard = (props) => {
	const { children } = props;

	const poppedWidth = 800;
	const poppedHeight = 496;
	const duration = 0.3;

	const { scrollY } = useScroll();
	const [isPopped, setIsPopped] = useState(false);

	const y = useMotionValue(0);

	const [windowWidth, windowHeight] = useWindowSize();
	const ref = useRef(null);

	useEffect(() => {
		return scrollY.on("change", (current) => {
			const previous = scrollY.getPrevious();
			const diff = current - previous;

			if (isPopped) {
				y.set(y.get() + diff);
			}
			console.log(scrollY);
		});
	}, [isPopped, scrollY, y]);

	// useMotionValueEvent(scrollY, "change", (current) => {
	// 	const previous = scrollY.getPrevious();
	// 	const diff = current - previous;

	// 	if (isPopped) {
	// 		y.set(y.get() + diff);
	// 	}
	// 	console.log(scrollY);
	// });

	const refBoxOffset = ref.current
		? {
				left: ref.current.getBoundingClientRect().left,
				top: ref.current.getBoundingClientRect().top,
				// right: windowWidth - ref.current.getBoundingClientRect().right,
				// bottom: windowHeight - ref.current.getBoundingClientRect().bottom,
		  }
		: {
				left: 0,
				top: 0,
				// right: 0,
				// bottom: 0,
		  };

	const targetWidth = Math.min(poppedWidth, windowWidth - 32);
	const targetHeight = Math.min(poppedHeight, windowHeight - 32);

	const targetXOffset = (windowWidth - targetWidth) / 2;
	const targetYOffset = (windowHeight - targetHeight) / 2;

	const x = targetXOffset - refBoxOffset.left;
	const ay = targetYOffset - refBoxOffset.top;

	return (
		<div ref={ref} className="absolute inset-0">
			<AnimatePresence>
				{/* {isPopped && (
					<motion.div
						onClick={() => {
							setIsPopped(false);
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-neutral-900/10 z-30 backdrop-blur-md"
					></motion.div>
				)} */}
			</AnimatePresence>
			<motion.div
				onClick={() => {
					setIsPopped(!isPopped);
				}}
				initial={false}
				animate={
					isPopped
						? {
								zIndex: 40,
								x: x,
								y: ay,
								width: targetWidth,
								height: targetHeight,
								transition: { duration, type: "spring" },
						  }
						: {
								zIndex: 0,
								transition: {
									zIndex: { delay: duration },
									duration,
									type: "spring",
								},
								y: 0,
						  }
				}
				style={{ y:y }}
				// transition={{ duration, type:"spring" }}
				whileTap={{ scale: 0.98 }}
				className={`absolute rotate-0 select-none left-0 top-0 w-full h-full`}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default PopToCenterCard;
