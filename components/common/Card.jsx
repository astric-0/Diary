"use client";

import { useFetchHome } from "@/utils/actions/home";
import React from "react";

function Card({ children }) {
	const { data } = useFetchHome();
	return (
		<div className="scale-125 text-white flex justify-center gap-4">
			<span>{children}</span>
			<span>{data?.data}</span>
		</div>
	);
}

export default Card;
