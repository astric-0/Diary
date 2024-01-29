"use client";

import React, { useContext } from "react";
import ThoughtContext from "@/lib/contexts/thought/context";
import { Card } from "../common";

function CardHolder() {
	const { state, handleInput } = useContext(ThoughtContext);

	return (
		<div className="">
			<Card {...state} />
		</div>
	);
}

export default CardHolder;
