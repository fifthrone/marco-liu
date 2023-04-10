"use client";

import IlluminatedCard from "@/components/illuminated-card";
import FifthTeesCard from "@/components/fifth-tees-card";
import PhotographyCard from "@/components/photography-card";
import SpotifyCard from "@/components/spotify-card";
import MapCard from "@/components/map-card";
import BioCard from "@/components/bio-card";
import Footer from "@/components/footer";
import SchematicCard from "@/components/schematic-card/schematic-card";

const Home = () => {
	return (
		<div className="mx-auto flex flex-col max-w-4xl items-center justify-center p-2 sm:px-6 sm:pt-16">
			<div className="grid w-full grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-3">
				<div className="relative sm:mb-4 sm:col-span-3">
					<BioCard />
				</div>
				{/* <h1 className="col-span-3 m-2 ml-2 mt-6 text-2xl text-cyan-300">
					Here's something I've worked on:
				</h1> */}
				<div className="relative h-80 sm:col-span-2">
					<SchematicCard />
				</div>
				<div className="relative h-72 sm:h-80">
					<SpotifyCard />
				</div>
				<div className="relative h-80">
					<PhotographyCard />
				</div>

				<div className="relative sm:col-span-2">
					<FifthTeesCard />
				</div>
				<div className="relative  sm:col-span-2">
					<MapCard />
				</div>

				<div className="relative h-80">
					<IlluminatedCard>
						<div className=""></div>
					</IlluminatedCard>
				</div>

				<div className="relative h-80">
					<IlluminatedCard>
						<div className=""></div>
					</IlluminatedCard>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
