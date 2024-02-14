"use client";

import { TagBox, ColorBox } from "../common";
import React, {
	useState,
	useRef,
	useEffect,
	useCallback,
	useContext,
} from "react";
import ThoughtContext from "@/lib/contexts/thought/context";
import { classy, bgColors } from "@/utils";
import { UserIcon, PlusIcon, PhotoIcon } from "@heroicons/react/24/outline";

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

	const handleAddFile = useCallback(
		(event) => {
			addFile(event.target.files[0]);
		},
		[addFile]
	);

	useEffect(() => {
		if (fileInputRef?.current) {
			const fileRef = fileInputRef;
			fileRef.current.addEventListener("change", handleAddFile);
			return () => {
				if (fileRef?.current) {
					fileRef.current.value = null;
					fileRef.current.removeEventListener(
						"change",
						handleAddFile
					);
				}
			};
		}
	}, [handleAddFile]);

	const handleTagInput = () => {
		if (newTagInput) {
			addTag(newTagInput);
			setNewTagInput("");
		}
	};

	return (
		<div className="max-h-screen">
			<form>
				<div
					className={classy(
						"duration-300 ease-linear col-auto w-full rounded-lg p-3 bg-cover shadow-lg drop-shadow-2xl",
						{ [state.color]: !state.fileUrl }
					)}
					style={
						state.fileUrl
							? { backgroundImage: `url(${state.fileUrl})` }
							: {}
					}
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
											className: "hover:bg-red-700",
										}}
									/>
								))}

								<div className="grid grid-cols-7">
									<div className="col-span-6">
										<Input
											{...{
												placeholder: "tags",
												value: newTagInput,
												onChange: (e) => {
													setNewTagInput(
														e.target.value.trim()
													);
												},
											}}
										/>
									</div>
									<div
										className="border-2 inline align-middle rounded-full p-1 h-fit w-fit px-4 border-white text-white cursor-pointer justify-self-center animate-bounce ease-in-out"
										title="add tag"
										onClick={handleTagInput}
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
							placeholder="share your thoughts!"
						></textarea>
					</div>
				</div>
			</form>
			<div className="flex justify-center mt-10">
				{bgColors.map((color, index) => (
					<ColorBox
						key={index}
						{...{
							color,
							onClick: addColor(color),
							active: state.color == color,
						}}
					/>
				))}
				<ColorBox
					className="p-3 ring-2 ring-white"
					color="bg-transparent"
					onClick={() => fileInputRef?.current.click()}
				>
					<PhotoIcon className="h-10" />
					<input
						ref={fileInputRef}
						type="file"
						accept="image/*"
						className="hidden"
					/>
				</ColorBox>
			</div>
		</div>
	);
}

export default ThoughtCardForm;
