class Form {
	constructor(state, useOrignialKeys = false) {
		this.formData = new FormData();
		this.formKeys = [];
		this.useOrignialKeys = useOrignialKeys;
		this.formify(state);
	}

	formify(state) {
		if (!state) throw "empty data passed";
		if (typeof state != "object") throw "State should be object";

		const formKeys = [];
		Object.entries(state).forEach(([key, value]) => {
			const [k, v] = this.#getKeyValue(key, value);
			this.formData.append(k, v);
			formKeys.push(k);
		});

		this.formKeys.push(...formKeys);
		return this;
	}

	reset() {
		this.formData = new FormData();
		return this;
	}

	get() {
		return this.formData;
	}

	valueOf() {
		return this.get();
	}

	#getKeyValue(key, value) {
		if (value == null || value == undefined) return [key, null];
		else if (Array.isArray(value))
			return [
				this.useOrignialKeys
					? key
					: key.includes("[") && key.includes("]")
					? key
					: key + "[]",
				value,
			];
		else if (typeof value == "object")
			return [
				this.useOrignialKeys
					? key
					: key.includes("{") && key.includes("}")
					? key
					: key + "{}",
				JSON.stringify(value),
			];
		return [key, value];
	}
}
