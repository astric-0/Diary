export default function classy(...cssClasses) {
	return cssClasses.reduce((selectedCssClasses, currentCssClass) => {
		if (currentCssClass?.constructor == Object) {
			return (
				selectedCssClasses +
				Object.keys(currentCssClass)
					.flatMap((key) => (currentCssClass[key] ? [" " + key] : []))
					.join("")
			);
		} else if (typeof currentCssClass == "string")
			return selectedCssClasses + " " + currentCssClass;
		else return selectedCssClasses;
	}, "");
}
