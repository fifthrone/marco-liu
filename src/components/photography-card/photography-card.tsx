import { CameraIcon } from "@heroicons/react/24/outline";
import PhotoSlide from "@/components/photography-card/photo-slide";
import PhotoCarousel from "@/components/photography-card/photo-carousel";
import PhotographyPopCard from "./photography-pop-card";
import PhotoStack from "./photo-stack";

const PhotographyCard = () => {
	return (
		<PhotographyPopCard
			unPopCard={
				<>
					<div className="absolute bottom-0 right-0 left-0 h-6 rounded-full bg-sky-500 opacity-75 blur-3xl"></div>
					<div className="relative flex h-full flex-col items-center justify-center space-y-4">
						<PhotoSlide />

						<div className="relative flex flex-row items-center justify-center space-x-2">
							<CameraIcon className="h-6 w-6 text-neutral-100" />
							<h2 className="relative text-xl font-medium text-neutral-100">
								Photography
							</h2>
						</div>
					</div>
				</>
			}
			popCard={
				<PhotoCarousel>
					<PhotoStack />
				</PhotoCarousel>
			}
		/>
	);
};

export default PhotographyCard;
