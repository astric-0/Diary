function shuffler(...arr) {
	const mx = arr.length;
	console.log(arr);
	const st = new Set();

	while (st.size < mx) {
		const val = parseInt(Math.random() * mx);
		st.add(val);
	}

	return [...st].map((val) => arr[val]);
}

export default shuffler;
