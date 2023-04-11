import Image from "next/image";
import Location from "../../public/location/location.png";
import MarcoLiuIcon from "../../public/marco-liu-3.png";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const LocationCard = (props) => {
	return (
		<div
			className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[30px] border-2border-transparent"
			// style={{
			// 	backgroundSize: `200% 200%, 200% 200%`,
			// 	backgroundClip: `padding-box, border-box`,
			// 	backgroundPosition: "50% 50%, 50% 50%",
			// 	backgroundImage: `
      //     linear-gradient(
      //       rgb(14, 14, 19) 0%,
      //       rgb(10, 10, 13) 100%), 
      //     linear-gradient(to right bottom,
      //       rgb(51, 51, 51) 0%,
      //       rgb(51, 51, 51) 30%,
      //       rgb(51, 51, 51) 40%,
      //       rgb(34, 34, 34) 50%,
      //       rgb(34, 34, 34) 60%,
      //       rgb(34, 34, 34) 100%)`,
			// }}
		>
			<div className="absolute inset-0">
				<Image
					height={600}
					width={600}
					alt="map"
					className="h-full w-full object-cover object-center scale-125 opacity-75"
					src={Location}
				/>
			</div>
			<motion.div
				className="hover:scale-110duration-300 relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-neutral-400 bg-sky-600/20"
				whileHover={{ scale: 1.2 }}
				transition={{ type: "spring" }}
			>
				<Image alt="avatar" className="h-auto w-16" src={MarcoLiuIcon} />
			</motion.div>
			<div className="absolute right-0 bottom-0 flex flex-row items-center justify-center space-x-1 rounded-tl-xl bg-neutral-500/40 py-1 px-2 pr-4 text-sm font-light text-neutral-300 backdrop-blur-sm">
				<MapPinIcon className="h-4 w-4" />
				<p>Yau Tsim Mong, Hong Kong</p>
			</div>
		</div>
	);
};

export default LocationCard;
