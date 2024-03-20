"use client";

import React, { useContext, useRef, useEffect, useCallback } from "react";
import { ImageBox, AddImageBox } from "../common";
import ThoughtContext from "@/lib/contexts/thought/context";

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
			{imageSection?.map(({ id, src }) => (
				<ImageBox
					key={id}
					{...{ src, onDelete: handleRemoveFromImageSection(id) }}
				/>
			))}
		</div>
	);
}

export default ImageSection;
