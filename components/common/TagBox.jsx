import { classy } from "@/utils";

function TagBox({ tag, onClick, color, className }) {
	return (
		<div
			className={classy(
				className,
				"border-2 inline-block rounded-full p-1 h-fit my-2 px-2 m-1 text-white cursor-pointer",
				color
			)}
			title="click to remove tag"
			onClick={onClick}
		>
			{tag}
		</div>
	);
}

TagBox.defaultProps = {
	color: "bg-black",
	onClick: () => {},
};

export default TagBox;
