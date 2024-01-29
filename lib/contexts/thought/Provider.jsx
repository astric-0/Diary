"use client";

import ThoughtContext from "./context";
import { useState } from "react";

function Provider({ children }) {
	const [state, setState] = useState({
		title: "",
		thought: "",
		tags: [],
	});

	const handleInput = (key) => (event) => {
		setState({ ...state, [key]: event.target.value });
	};

	const addTag = (tag) => {
		setState({ ...state, tags: [...state.tags, tag] });
	};

	return (
		<ThoughtContext.Provider value={{ state, handleInput, addTag }}>
			{children}
		</ThoughtContext.Provider>
	);
}

export default Provider;
