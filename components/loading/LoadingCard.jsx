import React from "react";

function LoadingCard() {
	return (
		<div className="hover:scale-110 duration-500 ease-linear animate-pulse col-auto w-96 h-72 bg-slate-800 rounded-lg shadow-lg p-3">
			<div className="flex justify-between">
				<div className="rounded-full bg-slate-400 w-4/6 h-5"></div>
				<div className="rounded-full bg-slate-400 w-1/6 h-5"></div>
			</div>
			<div className="rounded-full my-3 bg-slate-400 h-5"></div>
			<div className="h-3/4 rounded-lg my-3 bg-slate-400"></div>
		</div>
	);
}

export default LoadingCard;
