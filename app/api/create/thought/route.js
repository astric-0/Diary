import { ok } from "@/utils";

export async function POST(request) {
	const data = await request.formData();
	console.log("-------------------------------------");
	for (const [key, value] of data.entries()) //.forEach(([key, value]) => console.log(key, ": ", value));
		console.log(key, ":", value);
	return ok();
}
