"use client";

import { useState } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";

const PopToCenterIlluminatedCard = (props) => {
	const { children } = props;
	const [pop, setPop] = useState(false);

	return (
		<PopToCenterCard pop={pop} onPopChange={setPop}>
			<IlluminatedCard pop={pop}>{children}</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default PopToCenterIlluminatedCard;
