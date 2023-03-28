"use client";

import { useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { transform } from "framer-motion";

function IlluminatedCard(props) {
	const { children, className, pop } = props;

	const maxRotation = 8;

	const ref = useRef(null);
	const mouse = useMouse(ref);

	const transformerX = transform(
		[0, mouse.elementWidth],
		[-maxRotation, maxRotation]
	);
	const transformerY = transform(
		[0, mouse.elementHeight],
		[maxRotation, -maxRotation]
	);

	const rotateX = mouse.isOver ? transformerY(mouse.y) : 0;
	const rotateY = mouse.isOver ? transformerX(mouse.x) : 0;

	const nonHoverStyle = {
		backgroundPosition: "50% 50%, 50% 50%",
		backgroundImage: `
			linear-gradient(
				rgb(14, 14, 19) 0%,
				rgb(10, 10, 13) 100%), 
			linear-gradient(to right bottom,
				rgb(51, 51, 51) 0%,
				rgb(51, 51, 51) 30%,
				rgb(51, 51, 51) 40%,
				rgb(34, 34, 34) 50%,
				rgb(34, 34, 34) 60%,
				rgb(34, 34, 34) 100%)`,
	};

	const hoverStyle = {
		backgroundPosition: "10% 10%, 20% 20%",
		backgroundImage: `
		linear-gradient(
			rgb(43, 34, 16) 0%,
			rgb(13, 10, 4) 100%),
		linear-gradient(to right bottom,
			rgb(62, 52, 40) 0%,
			rgb(101, 85, 32) 30%,
			rgb(239, 207, 124) 40%,
			rgb(84, 71, 13) 50%,
			rgb(81, 68, 37) 60%,
			rgb(64, 54, 32) 100%)`,

		// backgroundImage: `
		// 	linear-gradient(
		// 		rgb(34, 16, 43) 0%,
		// 		rgb(10, 4, 13) 100%),
		// 	linear-gradient(to right bottom,
		// 		rgb(48, 40, 62) 0%,
		// 		rgb(78, 32, 101) 30%,
		// 		rgb(198, 94, 209) 40%,
		// 		rgb(73, 13, 84) 50%,
		// 		rgb(54, 37, 81) 60%,
		// 		rgb(37, 32, 64) 100%)`,
	};

	return (
		<div
			className={`absolute inset-0 ${className}`}
			style={{ perspective: "1200px" }}
			ref={ref}
		>
			<motion.div
				animate={
					pop
						? {
								rotateX: 0,
								rotateY: 0,
						  }
						: {
								rotateX,
								rotateY,
						  }
				}
				transition={{ duration: 0.15 }}
				className="absolute inset-0"
			>
				<motion.div
					initial={false}
					className="absolute inset-0 -z-20 overflow-hidden rounded-[30px] border-2 border-transparent bg-white"
					animate={
						pop ? nonHoverStyle : mouse.isOver ? hoverStyle : nonHoverStyle
					}
					transition={{ duration: 0.5 }}
					style={{
						backgroundSize: `200% 200%, 200% 200%`,
						backgroundClip: `padding-box, border-box`,
					}}
				>
					{children}
					<motion.div
						className="absolute inset-0 -z-10"
						style={{ transformOrigin: "left top" }}
						initial={false}
						animate={
							pop
								? { scale: 1.2, opacity: 0 }
								: mouse.isOver
								? { scale: 2.0, opacity: 1 }
								: { scale: 1.2, opacity: 0 }
						}
						transition={{ duration: 0.5 }}
					>
						<div
							className="absolute h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-[10px]
							border-[#edb347] blur-lg"
							// className="absolute h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-[10px] border-[#7F0582] blur-lg"
							style={{
								boxShadow: `0px 0px 200px 20px #694223, inset 0px 0px 200px 20px #52341b`, // boxShadow: `0px 0px 200px 20px #220643, inset 0px 0px 200px 20px #220643`,
							}}
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default IlluminatedCard;
