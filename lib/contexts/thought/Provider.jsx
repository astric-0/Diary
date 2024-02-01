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
	});

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

	return (
		<ThoughtContext.Provider
			value={{ state, handleInput, addTag, removeTag, addColor, addFile }}
		>
			{children}
		</ThoughtContext.Provider>
	);
}

export default Provider;
