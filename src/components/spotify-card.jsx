import { AnimatePresence, motion } from "framer-motion";

const SpotifyCard = (props) => {
	return (
		// <PopToCenterCard
		// 	className="h-80"
		// 	pop={pop}
		// 	onPopChange={setPop}
		// 	poppedHeight={800}
		// >
		// <IlluminatedCard pop={pop}>
		<div
			className="relative h-full w-full rounded-[30px] border-2 border-transparent"
			style={{
				backgroundSize: `200% 200%, 200% 200%`,
				backgroundClip: `padding-box, border-box`,
				backgroundPosition: "50% 50%, 50% 50%",
				backgroundImage: `
          linear-gradient(
            rgb(14, 14, 19) 0%,
            rgb(10, 10, 13) 100%), 
          linear-gradient(to right bottom,
            rgb(51, 51, 51) 0%,
            rgb(51, 51, 51) 30%,
            rgb(51, 51, 51) 40%,
            rgb(34, 34, 34) 50%,
            rgb(34, 34, 34) 60%,
            rgb(34, 34, 34) 100%)`,
			}}
		>
			<AnimatePresence>
				<motion.div
					// initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, transition: { duration: 0.1 } }}
					transition={{ duration: 0.6 }}
					className={`relative h-full w-full overflow-hidden`}
				>
					<div className="flex h-full flex-col items-start justify-between p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="168px"
							width="168px"
							version="1.1"
							viewBox="0 0 168 168"
							className="h-14 w-auto"
						>
							<path
								fill="#86efac"
								d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
							/>
						</svg>
						<div className="flex flex-col space-y-2">
							<div className="flex flex-row items-center space-x-2">
								<div className="h-1 w-1 translate-y-[1px] rounded-full bg-green-300" />
								<p className="text-smx font-light text-green-300">
									Last played
								</p>
							</div>
							<h1 className="text-2xl text-neutral-100">
								honest (feat. moon tang)
							</h1>
							<h2 className="text-lg font-extralight text-neutral-400">
								Gareth. T, moon tang
							</h2>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
			{/* <AnimatePresence>
						{pop && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.1 } }}
								transition={{ duration: 0.6 }}
								className="relative flex h-full flex-col space-y-8 overflow-y-scroll bg-neutral-900 p-4 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] sm:p-20 [&::-webkit-scrollbar]:hidden"
							>
								<div className="flex flex-col space-y-1">
									<div className="flex flex-row items-center justify-start space-x-12">
										<h1 className="text-5xl font-semibold">Fifth Tees</h1>
										<GlowLink>Check it out</GlowLink>
									</div>
									<p className="mt-2 text-lg text-neutral-400">
										A small e-commerce website for selling t-shirts and
										stickers.
									</p>
								</div>
								<WebFrame>
									<Image
										src={FifthTeesDemo}
										alt="A screenshot from the Fifth Tees Website"
									/>
								</WebFrame>
								<p className="text-xl text-neutral-400">
									I've been designing T-Shirts Lorem ipsum dolor, sit amet
									consectetur adipisicing elit. Provident nam fugiat officiis
									odio iusto sit sint eos vero et perferendis quod, illum rerum
									ipsa, labore libero veritatis explicabo ea? Eum.
								</p>
							</motion.div>
						)}
					</AnimatePresence> */}
		</div>
		// </IlluminatedCard>
		// </PopToCenterCard>
	);
};

export default SpotifyCard;
