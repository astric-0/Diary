"use client";

import React, { memo, useMemo } from "react";
import { API } from "@/config";
import { CardLayout } from ".";
import { Card } from "../common";
import useSWR from "swr";
import { LoadingCard } from "../loading";
import { makeRange } from "@/utils";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LoadingCards({ limit = 10 }) {
	const loadingCards = makeRange(0, limit, (key) => (
		<LoadingCard key={key} />
	));
	return <>{loadingCards}</>;
}

function CardsGrid() {
	const {
		data: { data } = {},
		error,
		isLoading,
	} = useSWR(API.HOME.INDEX, fetcher);

	return (
		<CardLayout>
			{isLoading ? (
				<LoadingCards />
			) : (
				data?.map((values, key) => <Card key={key} {...values} />)
			)}
		</CardLayout>
	);
}

export default CardsGrid;
