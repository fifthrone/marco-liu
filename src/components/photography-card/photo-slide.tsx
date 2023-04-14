"use client";

import Image from "next/image";
import MountFuji from "../../../public/photography/mount-fuji.jpg";
import Shibuya from "../../../public/photography/shibuya.jpg";
import Dining from "../../../public/photography/dining.jpg";
import Asakusa from "../../../public/photography/asakusa.jpg";
import Fujiyoshida from "../../../public/photography/fujiyoshida.jpg";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PhotoSlide() {
	const [offset, setOffset] = useState(0);

	const photoStack = [MountFuji, Shibuya, Dining, Asakusa, Fujiyoshida];
	const styles = [
		{
			x: -336,
			scale: 0.75,
			opacity: 0,
		},
		{
			x: -168,
			scale: 0.75,
			opacity: 1,
		},
		{
			x: 0,
			scale: 1,
			opacity: 1,
		},
		{
			x: 168,
			scale: 0.75,
			opacity: 1,
		},
		{
			x: 336,
			scale: 0.75,
			opacity: 0,
		},
	];

	useEffect(() => {
		setOffset((offset) => offset + 1);
		const intervalId = setInterval(() => {
			setOffset((offset) => offset + 1);
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div className="relative h-60 w-full overflow-hidden">
			{photoStack.map((photo, index) => (
				<motion.div
					initial={false}
					animate={styles[(index + offset) % 5]}
					transition={{ duration: 1, ease: "easeInOut" }}
					key={index}
					className="absolute flex h-full w-full items-center justify-center"
				>
					<Image
						width={100}
						height={150}
						src={photo}
						alt="photo"
						className="h-auto w-40 rounded-2xl"
					/>
				</motion.div>
			))}
		</div>
	);
}
