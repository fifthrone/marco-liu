import Image from "next/image";
import Link from "next/link";
import FifthTeesCard from "@/components/fifth-tees-card";
import PhotographyCard from "@/components/photography-card/photography-card";
import SpotifyCard from "@/components/spotify-card/spotify-card";
import LocationCard from "@/components/location-card";
import MapCard from "@/components/map-card";
import BioCard from "@/components/bio-card/bio-card";
import TimeCard from "@/components/time-card";
import Footer from "@/components/footer";
import SchematicCard from "@/components/schematic-card/schematic-card";
import IlluminatedCard from "@/components/illuminated-card";
import MahjongCameraIcon from "@/app/app-icons/mahjong-camera.png";
import BattlemapMakerIcon from "@/app/app-icons/battlemap-maker.png";
import LearnSmarterIcon from "@/app/app-icons/learn-smarter.png";

const appShowcase = [
	{
		name: "Mahjong Camera",
		description:
			"Scan mahjong hand, calculate score, and track games instantly.",
		icon: MahjongCameraIcon,
		appStoreUrl: "https://apps.apple.com/app/id6475007399",
	},
	{
		name: "BattleMap Maker",
		description: "Generate tabletop RPG maps fast for your next campaign.",
		icon: BattlemapMakerIcon,
		appStoreUrl: "https://apps.apple.com/app/id6756099903",
	},
	{
		name: "Learn Smarter",
		description:
			"Turn notes into memory-friendly review for long-term learning.",
		icon: LearnSmarterIcon,
		appStoreUrl: "https://apps.apple.com/app/id6514298224",
	},
];

export default function Home() {
	return (
		<div className="mx-auto flex max-w-4xl flex-col items-center justify-center p-2 sm:px-6 sm:pt-16">
			<div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
				<div className="relative sm:col-span-3 sm:mb-4">
					<BioCard />
				</div>
				<div className="relative sm:col-span-3">
					{/* <h2 className="mb-3x ml-1 text-lg font-medium text-neutral-200 sm:mb-2 sm:text-xl">
						Apps
					</h2> */}
					<div className="grid grid-cols-1 gap-2 pb-2x sm:grid-cols-3 sm:gap-4 sm:pb-6x">
						{appShowcase.map((app) => (
							<Link
								key={app.name}
								href={app.appStoreUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block min-h-[280px]"
							>
								<IlluminatedCard pop={false}>
									<div className="relative flex h-full min-h-[280px] flex-col justify-between p-5">
										<div className="absolute right-5 top-5 text-neutral-400">
											<svg
												stroke="currentColor"
												fill="none"
												strokeWidth="2"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
											>
												<path d="M7 17 17 7" />
												<path d="M9 7h8v8" />
											</svg>
										</div>
										<div className="relative h-20 w-20 overflow-hidden rounded-[20px] border border-neutral-700/60">
											<Image
												src={app.icon}
												alt={`${app.name} icon`}
												fill
												className="object-cover"
												sizes="80px"
											/>
										</div>
										<div className="flex flex-col space-y-2">
											<h1 className="mt-2 w-fit rounded-full border border-orange-600/75 px-2 text-xs font-light text-orange-600">
												App
											</h1>
											<h3 className="mt-4 text-xl font-semibold text-white">
												{app.name}
											</h3>
											<p className="flex-1x mt-2 text-smx font-extralight text-neutral-500">
												{app.description}
											</p>
										</div>
									</div>
								</IlluminatedCard>
							</Link>
						))}
					</div>
				</div>
				<div className="relative h-80 sm:col-span-2">
					<SchematicCard />
				</div>
				<div className="relative h-72 sm:h-80">
					{/* @ts-expect-error Async Server Component */}
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
					<LocationCard />
				</div>
				<div className="relative h-80">
					{/* @ts-expect-error Async Server Component */}
					<TimeCard />
				</div>
			</div>
			<Footer />
		</div>
	);
}
