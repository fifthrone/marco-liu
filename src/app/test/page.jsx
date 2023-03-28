"use client";

import IlluminatedCard from "@/components/illuminated-card";

const page = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center flex-col space-y-4 overflow-scroll">
			<IlluminatedCard>
				<div className="w-96 h-96 p-8">
					<div>Hello World</div>
					<div>Hello World</div>
					<div>Hello World</div>
					<div>Hello World</div>
					<div>Hello World</div>
				</div>
			</IlluminatedCard>
		</div>
	);
};

export default page;
