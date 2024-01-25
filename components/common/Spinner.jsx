import React from "react";
import { classy } from "@/utils";

const Spinner = ({ colorClass }) => {
	return (
		<svg
			className={classy(
				"animate-spin my-auto m-1 h-6 w-6 border-4 rounded-full",
				{
					[colorClass]: !!colorClass,
					"border-indigo-400 border-b-indigo-600": !colorClass,
				}
			)}
		></svg>
	);
};

export default Spinner;
