const image_api = process.env.image_api;

const API = {
	INDEX: "https://localhost:3000/",
	HOME: {
		INDEX: "/api/home",
	},
	IMAGE: {
		THOUGHT: image_api + "/thoughts",
	},
};

const make = (url, path) => url + "/" + path;
const make_t_image = (img) => make(API.IMAGE.THOUGHT, img);

Object.freeze(API);

export { API, make, make_t_image };
