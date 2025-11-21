import Link from "next/link"

import { HomeIcon } from "lucide-react";

export const Navbar = () => {
  return (
		<nav className="top-0 left-0 border-neutral-900 z-50 max-w-5xl mx-auto">
			<div className="flex items-center justify-between px-4 py-6">
				<Link
					href="/"
					className="text-[16px] font-bold bg-zinc-800 p-2 rounded-full">
					<HomeIcon className="text-zinc-200" />
				</Link>

				<Link
					href="/leaderboard"
					className="font-bold bg-zinc-800 py-2 px-4 rounded-full">
					Leaderboard
				</Link>
			</div>
		</nav>
	);
}