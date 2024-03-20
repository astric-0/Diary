"use client";

import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { classy } from "@/utils";
import { Transition } from "@headlessui/react";

function ImageBox({ src, onDelete }) {
	const [hover, setHover] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => setShow(true), 300);
	}, []);

	return (
		<Transition
			show={show}
			enter="duration-[500ms] linear"
			enterFrom="opacity-0 scale-0"
			enterTo="opacity-100 scale-[80%]"
			leave="duration-[500ms] linear"
			leaveFrom="opacity-100 scale-[80%] "
			leaveTo="opacity-0 scale-0"
		>
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
					onClick={() => {
						setShow(false);
						setTimeout(onDelete, 1000);
					}}
				/>
				<Image
					src={src}
					alt="memory"
					className="object-cover rounded-xl ring-2 ring-gray-400"
					fill
				/>
			</div>
		</Transition>
	);
}

export default ImageBox;
