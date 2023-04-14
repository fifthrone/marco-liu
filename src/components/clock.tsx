"use client";

import { useState, useEffect } from "react";

export default function Clock() {
	const [currentTime, setCurrentTime] = useState<Date | null>(null);

	useEffect(() => {
		setCurrentTime(new Date());
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const formattedTime =
		currentTime &&
		currentTime
			.toLocaleTimeString([], {
				hour12: true,
				hour: "2-digit",
				minute: "2-digit",
			})
			.toLocaleLowerCase();

	return (
		<div className="text-4xl tracking-wide text-white">{formattedTime}</div>
	);
}
