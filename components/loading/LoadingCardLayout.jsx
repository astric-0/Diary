import React from "react";

function LoadingCardLayout({ children }) {
	return (
		<div className="grid grid-cols-4 gap-10 justify-between p-10">
			{children}
		</div>
	);
}

export default LoadingCardLayout;
