import { Card } from "@/components/common";
import { LoadingCard } from "@/components/loading";
import { CardLayout, CardsGrid } from "@/components/home";

export default async function Home() {
	const loadingCards = [1, 2, 3, 4, 5];
	//const loadingCards = [1, 2];

	return <CardsGrid />;
}
