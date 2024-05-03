"use client";

import React from "react";
import { classy } from "@/utils";
import {
	BookOpenIcon,
	PlusCircleIcon,
	HomeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CreateIcon({ active }) {
	return (
		<div className="my-auto mx-2 text-white">
			<PlusCircleIcon
				className={classy(
					"h-14 hover:rotate-180 hover:scale-125 hover:text-indigo-500 duration-300 ease-out cursor-pointer",
					{ "text-indigo-500": active }
				)}
				title="Create"
			/>
		</div>
	);
}

export function NavIcon({ label, icon: Icon, active, href }) {
	return (
		<Link
			href={href}
			className={classy(
				"cursor-pointer m-2 hover:scale-110 duration-200 ease-linear aspect-square w-16 p-1 flex flex-col items-center",
				{ "border-b-2 text-indigo-500 border-indigo-500": active }
			)}
		>
			<Icon className="h-10" />
			<span className="text-lg">{label}</span>
		</Link>
	);
}

function Nav() {
	const icons = [
		{ label: "Home", icon: HomeIcon, href: "/" },
		{ label: "Read", icon: BookOpenIcon, href: "/read" },
	];

	const pathname = usePathname();
	return (
		<div className="absolute bottom-6 right-6">
			<div className="flex justify-end p-1">
				{icons.map((val, index) => (
					<NavIcon
						key={index}
						{...val}
						active={val.href == pathname}
					/>
				))}
				<CreateIcon active={pathname.includes("create")} />
			</div>
		</div>
	);
}

export default Nav;
