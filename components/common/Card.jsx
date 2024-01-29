"use client";

import React from "react";

function Card({ title, thought, tags }) {
	return (
		<div className="hover:scale-110 duration-500 ease-linear col-auto w-full h-96 bg-slate-800 rounded-lg shadow-lg p-3">
			<div className="grid grid-cols-6">
				<div className="col-span-1">
					<div className="aspect-square rounded-full w-2/3 bg-slate-400"></div>
				</div>
				<div className="col-span-5">
					<div className="flex justify-between">
						<div className="rounded-full h-5">{title}</div>
					</div>
					<div className="rounded-full mt-3 bg-slate-400 h-5">
						{tags}
					</div>
				</div>
			</div>
			<div className="h-3/4 my-3 rounded-lg bg-slate-400">{thought}</div>
		</div>
	);
}

export default Card;
