"use client";

import ThoughtContext from "@/lib/contexts/thought/context";
import { bgColors, classy } from "@/utils";
import { useContext } from "react";
import { make, API } from "@/config";

export default function PostSection() {
	const { state, duration, imageSection } = useContext(ThoughtContext);

	async function handlePost() {
		const formData = new FormData();

		for (const { file } of imageSection)
			formData.append("images[]", file, file.name);

		const { title, thought, tags, color, fileUrl = { file: "" } } = state;

		formData.append("title", title);
		formData.append("thought", thought);
		formData.append("fileUrl", fileUrl);
		formData.append("color", color);

		tags.forEach((tag) => formData.append("tags[]", tag));

		const resp = await fetch(API.CREATE.THOUGHT, {
			method: "POST",
			body: formData,
		});

		if (resp.ok) console.log("uploaded");
	}

	return (
		<button
			onClick={handlePost}
			className={classy(
				duration,
				"ease-linear flex p-3 w-full rounded-lg justify-center tracking-widest text-xl",
				{
					[state.color]: !state.fileUrl,
				},
				{ [bgColors[0]]: state.fileUrl }
			)}
		>
			Post
		</button>
	);
}
