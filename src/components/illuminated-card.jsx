"use client";

import { useRef, useState, useEffect } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { transform } from "framer-motion";

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
		rgb(46, 35, 16) 0%,
		rgb(13, 10, 4) 100%),
	linear-gradient(to right bottom,
		rgb(62, 52, 40) 0%,
		rgb(101, 85, 32) 30%,
		rgb(239, 207, 124) 40%,
		rgb(84, 71, 13) 50%,
		rgb(81, 68, 37) 60%,
		rgb(64, 54, 32) 100%)`,
};

function IlluminatedCard(props) {
	const { children, className, pop } = props;

	const [isMobile, setIsMobile] = useState(null);
	const ref = useRef(null);
	const mouse = useMouse(ref);

	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	const maxRotation = 8;

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

	return (
		<div
			className={`group relative h-full w-full ${className}`}
			style={{ perspective: "1200px" }}
			ref={ref}
		>
			<div
				className={`${
					pop ? "opacity-50" : ""
				} absolute inset-4 -z-40 rounded-[30px] bg-amber-200 opacity-0 blur-2xl duration-1000 md:group-hover:opacity-50`}
			/>
			<motion.div
				animate={
					isMobile || pop
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
				className="h-full w-full"
			>
				<motion.div
					initial={false}
					animate={
						isMobile || pop
							? nonHoverStyle
							: mouse.isOver
							? hoverStyle
							: nonHoverStyle
					}
					transition={{ duration: 0.5 }}
					className="relative h-full w-full overflow-hidden rounded-[30px] border-2 border-transparent"
					style={{
						backgroundSize: `200% 200%, 200% 200%`,
						backgroundClip: `padding-box, border-box`,
						...nonHoverStyle,
					}}
				>
					<motion.div
						className="absolute inset-0"
						style={{ transformOrigin: "left top" }}
						initial={false}
						animate={
							isMobile || pop
								? { scale: 1.2, opacity: 0 }
								: mouse.isOver
								? { scale: 1.9, opacity: 1 }
								: { scale: 1.2, opacity: 0 }
						}
						transition={{ duration: 0.5 }}
					>
						<div
							className="absolute h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-[#785a22] blur-lg"
							style={{
								boxShadow: `0px 0px 200px 20px #694223, inset 0px 0px 200px 20px #52341b`,
							}}
						/>
					</motion.div>
					<div className="h-full w-full">{children}</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default IlluminatedCard;
