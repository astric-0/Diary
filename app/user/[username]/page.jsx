import { Suspense } from "react";
import { madeUpDelay } from "@/utils";

const Loading = () => <h2 className="h-52">Loading.......</h2>;

async function RenderUser({ username }) {
	await madeUpDelay(3000);
	return <div className="text-green-500">{username}</div>;
}

export default async function Page({ params: { username } }) {
	await madeUpDelay(2000);
	return (
		<Suspense fallback={<Loading />}>
			<RenderUser {...{ username }} />
		</Suspense>
	);
}
