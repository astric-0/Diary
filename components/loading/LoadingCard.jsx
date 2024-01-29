import React from "react";

function LoadingCard() {
	return (
		<div className="hover:scale-110 duration-500 ease-linear animate-pulse col-auto w-96 h-72 bg-slate-800 rounded-lg shadow-lg p-3">
			<div className="grid grid-cols-4">
				<div className="col-span-1">
					<div className="aspect-square rounded-full h-4/6 bg-slate-400"></div>
				</div>
				<div className="col-span-3">
					<div className="flex justify-between">
						<div className="rounded-full bg-slate-400 w-4/12 h-5"></div>
						<div className="rounded-full bg-slate-400 w-7/12 h-5"></div>
					</div>
					<div className="rounded-full mt-3 bg-slate-400 h-5"></div>
				</div>
			</div>
			<div className="h-4/6 rounded-lg bg-slate-400"></div>
		</div>
	);
}

export default LoadingCard;
