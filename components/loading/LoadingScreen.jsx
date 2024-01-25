import React from "react";
import { Spinner } from "../common";
function LoadingScreeen() {
	return (
		<div className="animate-pulse bg-gray-800 w-full h-full rounded-lg">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500">
				<div className="flex gap-2 backdrop-blur-l p-2 scale-150">
					<Spinner />
					<span className="text-3xl">Loading...</span>
				</div>
			</div>
		</div>
	);
}

export default LoadingScreeen;
