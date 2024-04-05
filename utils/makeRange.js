export default function makeRange(start, end, callback) {
	const fn =
		typeof callback == "function"
			? (_, index) => callback(index + start)
			: (_, index) => index + start;

	return Array.from({ length: end - start }, fn);
}
