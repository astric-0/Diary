"use client";

import React, {
	useContext,
	useRef,
	useEffect,
	useCallback,
	useState,
} from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ThoughtContext from "@/lib/contexts/thought/context";
import { classy } from "@/utils";

function AddImageBox({ onClick }) {
	return (
		<div
			onClick={onClick}
			className="hover:scale-90 cursor-pointer scale-[80%] ease-linear duration-200 relative w-full h-40 bg-white bg-opacity-30 rounded-lg"
		>
			<PlusIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-20" />
		</div>
	);
}

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

function ImageSection() {
	const ref = useRef(null);
	const { imageSection, addImageSection, removeFromImageSection } =
		useContext(ThoughtContext);

	const handleAddImageSection = useCallback(
		(event) => {
			addImageSection(event.target.files);
		},
		[addImageSection]
	);

	const handleRemoveFromImageSection = (index) => () =>
		removeFromImageSection(index);

	useEffect(() => {
		if (ref?.current) {
			const fileRef = ref;
			fileRef.current.addEventListener("change", handleAddImageSection);
			return () => {
				if (fileRef?.current) {
					fileRef.current.value = null;
					fileRef.current.removeEventListener(
						"change",
						handleAddImageSection
					);
				}
			};
		}
	}, [handleAddImageSection]);

	return (
		<div className="flex flex-col p-1">
			<input
				type="file"
				className="hidden"
				multiple
				accept="image/*"
				ref={ref}
			/>
			<AddImageBox onClick={() => ref?.current.click()} />
			{imageSection?.map(({ src }, index) => (
				<ImageBox
					key={index}
					src={src}
					onDelete={handleRemoveFromImageSection(index)}
				/>
			))}
		</div>
	);
}

export default ImageSection;
