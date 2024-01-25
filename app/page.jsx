import { Card } from "@/components/common";
import { LoadingCard, LoadingCardLayout } from "@/components/loading";

export default function Home() {
	//const loadingCards = [1, 2, 3, 4, 5, 6, 7, 9, 1, 2, 3, 4, 5, 6, 7];
	const loadingCards = [1, 2];
	return (
		<LoadingCardLayout>
			{loadingCards.map((_, key) => (
				<LoadingCard key={key} />
			))}
		</LoadingCardLayout>
	);
}
