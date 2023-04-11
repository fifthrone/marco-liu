import marcoLiuIcon from "../../public/marco-liu-2.png";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="mt-40 mb-20 flex w-full flex-col items-center space-y-2">
			<Image src={marcoLiuIcon} alt="avatar" className="h-16 w-auto" />
			<p className="max-w-[500px] text-neutral-600 text-xs leading-4 text-center font-light">
				Hey there, thanks for visiting my website! Just a few friendly reminders
				before you explore: By hanging out here, you're agreeing to play by some
				simple rules. Everything you see on this site (like text,
				images, and graphics) is
				protected by copyright law. So, let's keep it cool and not copy or share
				any of the content without asking me. Feel free to enjoy the
				site for your personal, non-commercial use, though! Also, I might switch
				things up around here now and then, so don't be surprised if you see
				some changes. Happy browsing!
			</p>
		</div>
	);
}
