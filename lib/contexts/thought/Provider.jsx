"use client";

import ThoughtContext from "./context";
import { useState, useCallback } from "react";
import { bgColors } from "@/utils";

function Provider({ children }) {
	const [state, setState] = useState({
		title: "",
		thought: "",
		tags: [],
		color: bgColors[0],
		files: [],
		fileUrl: null,
	});

	const [imageSection, setImageSection] = useState([]);

	const handleInput = useCallback(
		(key) => (event) => {
			setState({ ...state, [key]: event.target.value });
		},
		[state]
	);

	const addColor = useCallback(
		(color) => () => {
			setState({ ...state, fileUrl: null, color });
		},
		[state]
	);

	const addTag = useCallback(
		(tag) => {
			setState({ ...state, tags: [...state.tags, tag] });
		},
		[state]
	);

	const addFile = useCallback(
		(file) => {
			if (file) {
				const fileUrl = URL.createObjectURL(file);
				setState({ ...state, color: null, fileUrl });
			}
		},
		[state]
	);

	const removeTag = useCallback(
		(index) => {
			setState({
				...state,
				tags: state.tags.filter((_, i) => index != i),
			});
		},
		[state]
	);

	const addImageSection = useCallback(
		(files) => {
			const filesToAdd = [].flatMap.call(files, (file) =>
				imageSection.some(
					({ file: { name, size } }) =>
						name == file.name && size == file.size
				)
					? []
					: [
							{
								id: Date.now(),
								file,
								src: URL.createObjectURL(file),
							},
					  ]
			);

			setImageSection([...imageSection, ...filesToAdd]);
		},
		[imageSection]
	);

	const removeFromImageSection = useCallback((imageId) => {
		setImageSection((images) => images.filter(({ id }) => id != imageId));
	}, []);

	return (
		<ThoughtContext.Provider
			value={{
				state,
				handleInput,
				addTag,
				removeTag,
				addColor,
				addFile,
				imageSection,
				addImageSection,
				removeFromImageSection,
			}}
		>
			{children}
		</ThoughtContext.Provider>
	);
}

export default Provider;
