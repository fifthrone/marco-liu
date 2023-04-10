"use client";

import Image from "next/image";
import IlluminatedCard from "@/components/illuminated-card";
import CoffeeMattersTshirtMasked from "../../../public/coffeeMattersTshirtMasked.png";

const page = () => {
	return (
		<div className="relative h-screen bg-white p-4">
			<Image
				className="drop-shadow-sm"
				style={{filter:"drop-shadow(0 25px 25px rgb(0 0 0 / 0.8))"}}
				alt="Coffee matters t-shirt"
				src={CoffeeMattersTshirtMasked}
			/>
		</div>
	);
};

export default page;
