const madeUpDelay = (time, callback) =>
	new Promise((resolve) => {
		setTimeout(() => {
			if (typeof callback == "function") return resolve(callback());
			return resolve();
		}, time);
	});

export default madeUpDelay;
