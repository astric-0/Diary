import React from "react";
import { classy } from "@/utils";

function Input({ type, label, onChange, value, placeholder, size, required }) {
	return (
		<div className="">
			<label className="block font-medium text-lg leading-6 text-white">
				{label}
				{required && <sup>*</sup>}
			</label>
			<input
				className={classy(
					"rounded-lg p-2 text-lg text-primary w-full",
					size
				)}
				{...{ type, onChange, value, placeholder, required }}
			/>
		</div>
	);
}

export default Input;
