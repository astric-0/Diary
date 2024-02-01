import { classy } from "@/utils";

function ColorBox({ active, className, color, onClick, children }) {
	return (
		<span
			className={classy(
				color,
				className,
				"inline-block aspect-square mx-2 rounded-full h-16 cursor-pointer duration-200 hover:scale-110",
				{
					"outline outline-2 outline-white outline-offset-4": active,
				}
			)}
			onClick={onClick}
		>
			{children}
		</span>
	);
}

ColorBox.defaultProps = {
	active: false,
	color: "bg-primary",
	onClick: () => {},
};

export default ColorBox;
