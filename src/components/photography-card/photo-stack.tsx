import Image from "next/image";
import MountFuji from "../../../public/photography/mount-fuji.jpg";
import Shibuya from "../../../public/photography/shibuya.jpg";
import Dining from "../../../public/photography/dining.jpg";
import Asakusa from "../../../public/photography/asakusa.jpg";
import Fujiyoshida from "../../../public/photography/fujiyoshida.jpg";
import TaiTan1 from "../../../public/photography/tai-tan-1.jpg";
import TaiTan2 from "../../../public/photography/tai-tan-2.jpg";
import TaiTan3 from "../../../public/photography/tai-tan-3.jpg";


export default function PhotoStack() {
	const photoStack = [
		MountFuji,
		Shibuya,
		Dining,
		Asakusa,
		Fujiyoshida,
		TaiTan1,
		TaiTan2,
		TaiTan3,
	];
	return (
		<>
			{photoStack.map((photo, i) => (
				<div
					key={i}
					className="h-[min(calc(100vh-8px),900px)] w-[min(calc(100vw-8px),600px)] flex-shrink-0"
				>
					<Image
						width={1000}
						src={photo}
						alt="photo"
						className="aspect-[2/3] h-full w-full object-contain"
					/>
				</div>
			))}
		</>
	);
}
