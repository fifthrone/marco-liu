import Image from "next/image";
import Location from "../../public/location/location.png";
import MarcoLiuIcon from "../../public/marco-liu-3.png";
import { MapPinIcon } from "@heroicons/react/20/solid";

const LocationCard = (props) => {
	return (
		<div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[30px]">
			<div className="absolute inset-0">
				<Image
					height={600}
					width={600}
					alt="map"
					className="h-full w-full scale-125 object-cover object-center opacity-75"
					src={Location}
				/>
			</div>
			<div className="hover:scale-110duration-300 relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-neutral-400 bg-sky-600/20 duration-500 hover:scale-125">
				<Image alt="avatar" className="h-auto w-16" src={MarcoLiuIcon} />
			</div>
			<div className="absolute right-0 bottom-0 flex flex-row items-center justify-center space-x-1 rounded-tl-xl bg-neutral-500/40 py-1 px-2 pr-4 text-sm font-light text-neutral-300 backdrop-blur-sm">
				<MapPinIcon className="h-4 w-4" />
				<p>Yau Tsim Mong, Hong Kong</p>
			</div>
		</div>
	);
};

export default LocationCard;
