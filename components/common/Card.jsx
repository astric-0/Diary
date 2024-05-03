"use client";

import React from "react";
import { TagBox } from ".";
import { API, make } from "@/config";
import { KeyIcon } from "@heroicons/react/24/outline";
import { EyeIcon, StarIcon } from "@heroicons/react/24/solid";

function Card({
	title,
	thought,
	tags,
	color,
	files,
	fileUrl,
	api = API.IMAGE.THOUGHT,
}) {
	return (
		<div
			className={`hover:shadow-lg mb-4 break-inside hover:shadow-white duration-200 bg-cover ease-linear col-auto w-full rounded-lg shadow-lg p-3 h-fit ${
				!fileUrl && color
			}`}
			style={
				fileUrl && {
					backgroundImage: `url(${make(api, fileUrl)})`,
				}
			}
		>
			<div className="grid grid-cols-6 bg-white p-2 rounded-xl bg-opacity-20">
				<div className="col-span-1 my-2">
					<div className="aspect-square rounded-full w-2/3 bg-slate-400"></div>
				</div>
				<div className="col-span-5">
					<div className="">{title}</div>
				</div>
			</div>
			<div className="mt-3 bg-white p-2 rounded-xl break-words bg-opacity-20 text-justify">
				{thought}
			</div>
			<div className="grid grid-cols-12 mt-3">
				<div className=" bg-white p-2 rounded-full bg-opacity-20 flex justify-around max-h-8 col-span-2">
					<button title="show in detail">
						<EyeIcon className="h-4" />
					</button>
					<button>
						<StarIcon className="h-4" />
					</button>
				</div>

				<div className="col-span-10 scale-75">
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
	);
}

export default Card;
