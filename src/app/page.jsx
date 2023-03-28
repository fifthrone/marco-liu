"use client";

import IlluminatedCard from "@/components/illuminated-card";
import PopToCenterCard from "@/components/pop-to-center-card";
import PopToCenterIlluminatedCard from "@/components/pop-to-center-illuminated-card";
import marcoLiuIcon from "../../public/marco-liu.png";
import Image from "next/image";
import {
	CameraIcon,
	MusicalNoteIcon,
	MapIcon,
	GlobeAmericasIcon,
	BuildingStorefrontIcon,
	PencilIcon,
} from "@heroicons/react/24/solid";
const Home = () => {
	return (
		<div className="mx-auto flex max-w-3xl items-center justify-center px-4 pt-16">
			<div className="grid w-full grid-cols-3 gap-4">
				<div className="relative col-span-3 mb-4">
					<div className="group relative h-full">
						<div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-amber-400 to-purple-500 opacity-75 blur-md duration-500 group-hover:opacity-100"></div>
						<div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-amber-400 to-purple-500 opacity-75 blur-3xl duration-500 group-hover:opacity-100"></div>
						<div className="relative h-full w-full overflow-hidden rounded-[30px] bg-black p-6">
							<Image
								className="absolute -bottom-4 left-2 h-44 w-44"
								src={marcoLiuIcon}
								alt="Marco"
							/>
							<h2 className="ml-44 text-3xl font-medium text-white">
								Hi! I'm Marco
							</h2>
							<h2 className="font-mediumx ml-44 text-2xl text-neutral-500">
								I'm interested in react, framer motion, three.js and building
								cool stuff.
							</h2>
						</div>
					</div>
				</div>
				{/* <h1 className="col-span-3 m-2 ml-2 mt-6 text-2xl text-cyan-300">
					Here's something I've worked on:
				</h1> */}
				<div className="relative col-span-2">
					<PopToCenterIlluminatedCard>
						<div className="flex h-full flex-col justify-end space-y-2 p-6">
							<GlobeAmericasIcon className="mb-4 h-7 w-7 text-neutral-100" />
							<h2 className="text-2xl font-medium text-neutral-100">
								3D Data Visualization
							</h2>
							<p className="text-neutral-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae eveniet corporis adipisci dolorum sit assumenda fuga
								sed autem corrupti, illum rerum laudantium maxime modi maiores
								voluptatem voluptate est dolor nihil.
							</p>
						</div>
					</PopToCenterIlluminatedCard>
				</div>
				<div className="relative h-80">
					<PopToCenterIlluminatedCard>
						<div className="flex h-full flex-col justify-end space-y-2 p-6">
							<CameraIcon className="mb-4 h-7 w-7 text-neutral-100" />
							<h2 className="text-2xl font-medium text-neutral-100">
								Photography
							</h2>
							<p className="text-neutral-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae eveniet. fuga sed autem.
							</p>
						</div>
					</PopToCenterIlluminatedCard>
				</div>
				<div className="relative h-80">
					<PopToCenterIlluminatedCard>
						<div className="flex h-full flex-col justify-end space-y-2 p-6">
							<MusicalNoteIcon className="mb-4 h-7 w-7 text-neutral-100" />
							<h2 className="text-2xl font-medium text-neutral-100">
								Last Listen
							</h2>
							<p className="text-neutral-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae eveniet. fuga sed autem.
							</p>
						</div>
					</PopToCenterIlluminatedCard>
				</div>
				<div className="relative col-span-2">
					<PopToCenterIlluminatedCard>
						<div className="flex h-full flex-col justify-end space-y-2 p-6">
							<BuildingStorefrontIcon className="mb-4 h-7 w-7 text-neutral-100" />
							<h2 className="text-2xl font-medium text-neutral-100">
								Fifth Tees
							</h2>
							<p className="text-neutral-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae eveniet corporis adipisci dolorum sit assumenda fuga
								sed autem corrupti, illum rerum laudantium maxime modi maiores
								voluptatem voluptate est dolor nihil.
							</p>
						</div>
					</PopToCenterIlluminatedCard>
				</div>
				<div className="relative col-span-2 h-80">
					<PopToCenterIlluminatedCard>
						<div className="flex h-full flex-col justify-end space-y-2 p-6">
							<PencilIcon className="mb-4 h-7 w-7 text-neutral-100" />
							<h2 className="text-2xl font-medium text-neutral-100">
								Schematics Drawing Tools
							</h2>
							<p className="text-neutral-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae eveniet corporis adipisci dolorum sit assumenda fuga
								sed autem corrupti, illum rerum laudantium maxime modi maiores
								voluptatem voluptate est dolor nihil.
							</p>
						</div>
					</PopToCenterIlluminatedCard>
				</div>

				<div className="relative h-80">
					<IlluminatedCard>
						<div className="h-80"></div>
					</IlluminatedCard>
				</div>

				<div className="relative h-80">
					<IlluminatedCard>
						<div className="h-80"></div>
					</IlluminatedCard>
				</div>

				<div className="relative h-80">
					<IlluminatedCard>
						<div className="h-80"></div>
					</IlluminatedCard>
				</div>
				<div className="relative h-80">
					<IlluminatedCard>
						<div className="h-80"></div>
					</IlluminatedCard>
				</div>
			</div>
		</div>
	);
};

export default Home;
