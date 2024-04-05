import { classy } from "@/utils";

function TagBox({ tag, onClick, color = "bg-black", className, title }) {
	return (
		<div
			className={classy(
				className,
				"border-2 inline-block rounded-full h-fit px-2 m-1 text-white cursor-pointer",
				color
			)}
			{...{ title, onClick }}
		>
			{tag}
		</div>
	);
}

export default TagBox;
