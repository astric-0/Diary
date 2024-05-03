import React from "react";

function CardLayout({ children }) {
	return (
		<div className="wrapper">
			<div className="m-2 box-border sm:columns-1 md:columns-2 lg:columns-4 xl:columns-4 gap-4">
				{children}
			</div>
		</div>
	);
}

export default CardLayout;
