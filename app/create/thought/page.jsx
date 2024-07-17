import {
	CardHolder,
	ThoughtCardForm,
	ImageSection,
	PostSection,
} from "@/components/create/";
import ThoughtProvider from "@/lib/contexts/thought/Provider";

function Page() {
	return (
		<ThoughtProvider>
			<div className="grid grid-cols-4 p-3">
				<div className="mx-2">
					<PostSection />
				</div>
				<div className="col-span-2">
					<ThoughtCardForm />
				</div>
				<div>
					<ImageSection />
				</div>
			</div>
		</ThoughtProvider>
	);
}

export default Page;
