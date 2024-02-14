"use client";

import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { classy } from "@/utils";

function ImageBox({ src, onDelete }) {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="scale-[80%] relative w-full h-40 hover:scale-[83%] duration-200 ease-linear  cursor-pointer"
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<TrashIcon
				className={classy(
					"bg-red-500 rounded-full p-1 absolute h-7 left-full z-20 top-0 -translate-y-1/2 -translate-x-1/2 duration-200 cursor-pointer",
					{ hidden: !hover }
				)}
				onClick={onDelete}
			/>
			<Image
				src={src}
				alt="memory"
				className="object-cover rounded-xl ring-2 ring-gray-400"
				fill
			/>
		</div>
	);
}

export default ImageBox;
