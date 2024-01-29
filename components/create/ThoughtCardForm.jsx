"use client";

import React, { useState } from "react";
import { useContext } from "react";
import ThoughtContext from "@/lib/contexts/thought/context";
import { classy } from "@/utils";
import { UserIcon, PlusIcon } from "@heroicons/react/24/outline";

function TagBox({ tag, onClick }) {
	return (
		<div
			className="border-2 inline-block rounded-full p-1 h-fit my-2 px-2 m-1 bg-slate-400 text-white cursor-pointer hover:bg-red-500"
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
					"p-2 text-lg text-white w-full bg-transparent focus:outline-none focus:border-b-2",
					size
				)}
				{...{ type, onChange, value, placeholder, required }}
			/>
		</div>
	);
}

function ThoughtCardForm() {
	const { state, handleInput, addTag, removeTag } =
		useContext(ThoughtContext);
	const [newTagInput, setNewTagInput] = useState("");

	const handleTagInputHide = () => {
		if (newTagInput) {
			addTag(newTagInput);
			setNewTagInput("");
		}
	};

	return (
		<form>
			<div className="duration-500 ease-linear col-auto w-full h-96 bg-slate-800 rounded-lg shadow-lg p-3">
				<div className="grid grid-cols-8">
					<div className="col-span-1">
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
									tag={tag}
									onClick={() => removeTag(index)}
								/>
							))}

							<div className="grid grid-cols-7">
								<div className="col-span-6">
									<Input
										placeholder="tags"
										value={newTagInput}
										onChange={(e) =>
											setNewTagInput(e.target.value)
										}
									/>
								</div>
								<div
									className="border-2 inline align-middle rounded-full p-1 h-fit w-fit px-4 border-slate-400 text-slate-400 cursor-pointer justify-self-center"
									title="add tag"
									onClick={handleTagInputHide}
								>
									<PlusIcon className="h-5" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-3/4 my-3 rounded-lg bg-slate-400">{}</div>
			</div>
		</form>
	);
}

export default ThoughtCardForm;
