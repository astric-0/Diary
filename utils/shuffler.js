function shuffler(...arr) {
	const mx = arr.length;
	const st = new Set();

	while (st.size < mx) st.add(parseInt(Math.random() * mx));

	return [...st].map((val) => arr[val]);
}

export default shuffler;
