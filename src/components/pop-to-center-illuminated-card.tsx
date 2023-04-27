"use client";

import { useState } from "react";
import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";

type PopToCenterIlluminatedCard = {
	children?: React.ReactNode;
};

const PopToCenterIlluminatedCard = (props: PopToCenterIlluminatedCard) => {
	const { children } = props;
	const [pop, setPop] = useState<boolean>(false);

	return (
		<PopToCenterCard className="h-80" pop={pop} onPopChange={setPop}>
			<IlluminatedCard pop={pop}>{children}</IlluminatedCard>
		</PopToCenterCard>
	);
};

export default PopToCenterIlluminatedCard;
