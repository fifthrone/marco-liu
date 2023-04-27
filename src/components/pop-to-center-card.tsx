"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";

import {
	AnimatePresence,
	motion,
	spring,
	useMotionValue,
	useScroll,
} from "framer-motion";

type PopToCenterCardProps = {
	children: React.ReactNode;
	className?: string;
	pop: boolean;
	onPopChange: Dispatch<SetStateAction<boolean>>;
	poppedWidth?: number;
	poppedHeight?: number;
};

const PopToCenterCard = (props: PopToCenterCardProps) => {
	const {
		children,
		className,
		pop,
		onPopChange,
		poppedWidth = 1000,
		poppedHeight = 600,
	} = props;

	const duration = 0.8;

	// const { scrollY } = useScroll();
	const [isPopped, setIsPopped] = useState(false);

	const popState = pop === undefined ? isPopped : pop;
	const setPopState = onPopChange === undefined ? setIsPopped : onPopChange;
	const y = useMotionValue(0);

	const [windowWidth, windowHeight] = useWindowSize();
	const ref = useRef<HTMLDivElement | null>(null);

	// useEffect(() => {
	// 	return scrollY.on("change", (current) => {
	// 		const previous = scrollY.getPrevious();
	// 		const diff = current - previous;

	// 		if (popState) {
	// 			y.set(y.get() + diff);
	// 		}
	// 	});
	// }, [popState, scrollY, y]);

	const refBoxOffset = ref.current
		? {
				left: ref.current.getBoundingClientRect().left,
				top: ref.current.getBoundingClientRect().top,
				right: windowWidth - ref.current.getBoundingClientRect().right,
				bottom: windowHeight - ref.current.getBoundingClientRect().bottom,
		  }
		: {
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
		  };

	const targetXOffset =
		(windowWidth - Math.min(poppedWidth, windowWidth - 4)) / 2;
	const targetYOffset =
		(windowHeight - Math.min(poppedHeight, windowHeight - 4)) / 2;

	return (
		<div ref={ref} className={`${className}`}>
			<AnimatePresence>
				{popState && (
					<motion.div
						onClick={() => {
							setPopState(false);
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-30 bg-neutral-900/10 backdrop-blur-md"
					></motion.div>
				)}
			</AnimatePresence>
			<motion.div
				onClick={() => {
					!popState && setPopState(true);
				}}
				initial={false}
				animate={
					popState
						? {
								zIndex: 40,
								left: targetXOffset - refBoxOffset.left,
								right: targetXOffset - refBoxOffset.right,
								top: targetYOffset - refBoxOffset.top,
								bottom: targetYOffset - refBoxOffset.bottom,
								transition: { type: "spring", mass: 0.5 },
						  }
						: {
								zIndex: 0,
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								// transition: {
								// 	type: "spring",
								// 	mass: 0.5,
								// },
								y: 0,
						  }
				}
				// style={{ y }}
				transition={popState ? {} : { zIndex: { delay: duration } }}
				whileTap={popState ? { scale: 1 } : { scale: 0.95 }}
				className={`absolute`}
			>
				<AnimatePresence>
					{popState ? (
						<motion.button
							onClick={() => {
								setPopState(false);
							}}
							className="absolute right-4 top-4 z-40 flex items-center justify-center rounded-full bg-neutral-700 p-1 duration-300 hover:bg-neutral-600"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<PlusSmallIcon className="h-5 w-5 rotate-45 scale-150 text-black" />
						</motion.button>
					) : null}
				</AnimatePresence>

				{children}
			</motion.div>
		</div>
	);
};

export default PopToCenterCard;
