"use client";

import ThoughtContext from "./context";
import { useState } from "react";

function Provider({ children }) {
	const [state, setState] = useState({
		title: "",
		thought: "",
		tags: [],
		color: "bg-slate-800",
	});

	const handleInput = (key) => (event) => {
		setState({ ...state, [key]: event.target.value });
	};

	const addColor = (color) => () => {
		setState({ ...state, fileUrl: null, color });
	};

	const addTag = (tag) => {
		setState({ ...state, tags: [...state.tags, tag] });
	};

	const addFile = (event) => {
		const fileUrl = URL.createObjectURL(event.target.files[0]);
		setState({ ...state, color: null, fileUrl });
	};

	const removeTag = (index) => {
		setState({ ...state, tags: state.tags.filter((_, i) => index != i) });
	};

	return (
		<ThoughtContext.Provider
			value={{ state, handleInput, addTag, removeTag, addColor, addFile }}
		>
			{children}
		</ThoughtContext.Provider>
	);
}

export default Provider;
