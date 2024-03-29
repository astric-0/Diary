import { PlusIcon } from "@heroicons/react/24/solid";

function AddImageBox({ onClick }) {
	return (
		<div
			onClick={onClick}
			className="hover:scale-90 cursor-pointer scale-[80%] ease-linear duration-200 relative w-full h-40 bg-white bg-opacity-30 rounded-lg"
		>
			<PlusIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-20" />
		</div>
	);
}

export default AddImageBox;
