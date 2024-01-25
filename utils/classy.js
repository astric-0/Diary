export default function classy(...cssClasses) {
	return cssClasses.reduce((selectedCssClasses, currentCssClass) => {
		if (typeof currentCssClass == "object") {
			return (
				selectedCssClasses +
				Object.keys(currentCssClass)
					.flatMap((key) => (currentCssClass[key] ? [" " + key] : []))
					.join("")
			);
		}

		return selectedCssClasses + " " + currentCssClass;
	}, "");
}
