import { CardHolder, ThoughtCardForm } from "@/components/create/";
import ThoughtProvider from "@/lib/contexts/thought/Provider";

function Page() {
	return (
		<ThoughtProvider>
			<div className="grid grid-cols-5 justify-center p-3">
				<div className="col-span-3">
					<ThoughtCardForm />
				</div>
			</div>
		</ThoughtProvider>
	);
}

export default Page;
