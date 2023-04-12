"use client";

import { useState, useEffect } from "react";

type WeatherData = {
	temperature: number;
	description: string;
};

const TimeCard = () => {
	const [currentTime, setCurrentTime] = useState<Date | null>(null);
	const [weather, setWeather] = useState<WeatherData | null>(null);

	useEffect(() => {
		setCurrentTime(new Date());
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(`/api/weather?location=Hong+Kong`);
				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}
				const data = await response.json();
				setWeather(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchWeather();
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
		<div
			className="relative flex h-full w-full flex-col overflow-hidden rounded-[30px] border-2 border-transparent p-6"
			style={{
				backgroundSize: `200% 200%, 200% 200%`,
				backgroundClip: `padding-box, border-box`,
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
			}}
		>
			{/* <p className="text-md text-neutral-500">It is now</p> */}
			{formattedTime && (
				<>
					<div className="text-4xl tracking-wide text-white">
						{formattedTime}
					</div>
					<p className="text-md text-neutral-500">in Hong Kong</p>
				</>
			)}
			{weather && (
				<div className="mt-6 text-4xl tracking-wide text-white">
					{Math.round(weather.temperature)}°C
				</div>
			)}
			{weather && (
				<div className="text-md text-neutral-500">{weather.description}</div>
			)}
			<div className="absolute -bottom-[250%] left-1/2 flex h-[300%] w-[200%] -translate-x-1/2 items-center justify-center rounded-full">
				<div className="bg-sky-950/75 h-[95%] w-[95%] rounded-full blur-xl"></div>
			</div>
			<div className="absolute -bottom-[270%] left-1/2 flex h-[300%] w-[200%] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border border-sky-800/25 bg-sky-900/20">
				<div className="h-[96%] w-[96%] rounded-full bg-sky-900/75 blur-md"></div>
			</div>
			<div className="absolute -bottom-[280%] left-1/2 flex h-[300%] w-[200%] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-sky-900">
				<div className="h-[95%] w-[95%] rounded-full bg-sky-700 blur-md"></div>
			</div>
		</div>
	);
};

export default TimeCard;
