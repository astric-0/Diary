"use client";

import React from "react";
import { TagBox } from ".";

function Card({ title, thought, tags, color, files, fileUrl }) {
	return (
		<div
			className={`hover:shadow-lg hover:shadow-white duration-200 ease-linear col-auto w-full rounded-lg shadow-lg p-3 h-fit ${color}`}
		>
			<div className="grid grid-cols-6 bg-white p-2 rounded-xl bg-opacity-20">
				<div className="col-span-1 my-2">
					<div className="aspect-square  rounded-full w-2/3 bg-slate-400"></div>
				</div>
				<div className="col-span-5">
					<div className="">{title}</div>
					<div className="mt-3">
						{tags?.map((tag, key) => (
							<TagBox
								key={key}
								{...{
									tag,
									color,
									className:
										"m-0 mt-1 mr-1 border-0 hover:scale-105 duration-100 linear",
									title: "click to view tag",
								}}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="mt-3 bg-white p-2 rounded-xl break-words bg-opacity-20 text-justify">
				{thought}
			</div>
		</div>
	);
}

export default Card;
