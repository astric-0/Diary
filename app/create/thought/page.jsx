import {
	CardHolder,
	ThoughtCardForm,
	ImageSection,
} from "@/components/create/";
import ThoughtProvider from "@/lib/contexts/thought/Provider";
``;
function Page() {
	return (
		<ThoughtProvider>
			<div className="grid grid-cols-4 p-3">
				<div></div>
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
