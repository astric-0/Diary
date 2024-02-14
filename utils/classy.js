export default function classy(...css) {
	return css.reduce((toAddCss, currCss) => {
		if (currCss?.constructor == Object) {
			return (
				toAddCss +
				Object.keys(currCss)
					.flatMap((key) => (currCss[key] ? [" " + key] : []))
					.join("")
			);
		} else if (typeof currCss == "string") return toAddCss + " " + currCss;
		else return toAddCss;
	}, "");
}
