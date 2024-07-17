const image_api = process.env.image_api;

const API = Object.freeze({
	INDEX: "https://localhost:3000/",
	HOME: {
		INDEX: "/api/home",
	},
	IMAGE: {
		THOUGHT: image_api + "/thoughts",
	},
	CREATE: {
		THOUGHT: "/api/create/thought",
	},
});

const make = (url, path) => (url + url.endsWith("/") ? "" : "/" + path);
const make_t_image = (img) => make(API.IMAGE.THOUGHT, img);

export { API, make, make_t_image };
