"use client";

import React, { useState, useRef } from "react";
import { useContext } from "react";
import ThoughtContext from "@/lib/contexts/thought/context";
import { classy } from "@/utils";
import { UserIcon, PlusIcon, PhotoIcon } from "@heroicons/react/24/outline";

function TagBox({ tag, onClick, color }) {
	return (
		<div
			className={classy(
				"border-2 inline-block rounded-full p-1 h-fit my-2 px-2 m-1 text-white cursor-pointer hover:bg-red-500",
				color
			)}
			title="add tag"
			onClick={onClick}
		>
			{tag}
		</div>
	);
}

function Input({
	type,
	label,
	onChange,
	value,
	placeholder,
	size,
	required,
	hidden,
}) {
	return (
		<div className={classy({ hidden })}>
			<label className="block font-medium text-lg leading-6 text-white">
				{label}
				{required && <sup>*</sup>}
			</label>
			<input
				className={classy(
					"p-2 text-lg text-white w-full bg-transparent focus:outline-none focus:border-b-2 placeholder-gray-200",
					size
				)}
				{...{ type, onChange, value, placeholder, required }}
			/>
		</div>
	);
}

function ThoughtCardForm() {
	const { state, handleInput, addTag, addFile, removeTag, addColor } =
		useContext(ThoughtContext);

	const [newTagInput, setNewTagInput] = useState("");

	const fileInputRef = useRef(null);

	const handleTagInputHide = () => {
		if (newTagInput) {
			addTag(newTagInput);
			setNewTagInput("");
		}
	};

	const handleFileInput = (event) => {
		addFile(event);
	};

	const colors = [
		"bg-slate-800",
		"bg-red-600",
		"bg-indigo-700",
		"bg-purple-700",
		"bg-purple-900",
		"bg-yellow-900",
		"bg-emerald-950",
		"bg-sky-950",
	];

	return (
		<div className="max-h-screen">
			<form>
				<div
					className={classy(
						"duration-300 ease-linear col-auto w-full rounded-lg shadow-lg p-3 bg-cover",
						state.color
					)}
					style={{ backgroundImage: `url(${state.fileUrl})` }}
				>
					<div className="grid grid-cols-8 bg-white p-2 rounded-3xl bg-opacity-20">
						<div className="col-span-1 my-2">
							<div className="aspect-square max-w-20 rounded-full bg-slate-400 p-2">
								<UserIcon />
							</div>
						</div>

						<div className="col-span-7">
							<div className="flex justify-between">
								<div className="w-full">
									<Input placeholder="title" />
								</div>
							</div>

							<div className="mt-3 w-full">
								{state.tags.map((tag, index) => (
									<TagBox
										key={index}
										{...{
											tag,
											color: state.color,
											onClick: () => removeTag(index),
										}}
									/>
								))}

								<div className="grid grid-cols-7">
									<div className="col-span-6">
										<Input
											placeholder="tags"
											value={newTagInput}
											onChange={(e) =>
												setNewTagInput(
													e.target.value.trim()
												)
											}
										/>
									</div>
									<div
										className="border-2 inline align-middle rounded-full p-1 h-fit w-fit px-4 border-white text-white cursor-pointer justify-self-center animate-bounce ease-in-out"
										title="add tag"
										onClick={handleTagInputHide}
									>
										<PlusIcon className="h-5" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="p-3 bg-white mt-3 rounded-3xl bg-opacity-20">
						<textarea
							rows={15}
							className="text-lg w-full bg-transparent focus:outline-none placeholder-gray-200"
							placeholder="your thoughts!"
						></textarea>
					</div>
				</div>
			</form>
			<div className="flex justify-center mt-10">
				{colors.map((color, index) => (
					<span
						key={index}
						className={classy(
							color,
							"inline-block aspect-square mx-2 rounded-full h-16 cursor-pointer duration-200 hover:scale-110",
							{
								"outline outline-2 outline-white outline-offset-4":
									state.color == color,
							}
						)}
						onClick={addColor(color)}
					></span>
				))}
				<span className="aspect-square mx-2 rounded-full h-16 outline cursor-pointer outline-2 p-3">
					<PhotoIcon
						className="h-10"
						onClick={() => fileInputRef.current.click()}
					/>

					<input
						ref={fileInputRef}
						type="file"
						className="hidden"
						onChange={addFile}
					/>
				</span>
			</div>
		</div>
	);
}

export default ThoughtCardForm;
