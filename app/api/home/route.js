import { NextResponse } from "next/server";
import { bgColors, madeUpDelay } from "@/utils";

function getHomeContent() {
	return [
		{
			id: "",
			title: "Harper Lee",
			thought:
				"Kill all the bluejays if you wish to but remember it's a sin to kill a mocking bird ... ",
			tags: ["words", "books", "reader", "track", "mockingbird"],
			color: bgColors[3],
			files: [],
			fileUrl: null,
		},
		{
			id: "",
			title: "fileTwo",
			thought:
				"hahahahhahahahhhahahahahahahahahhahahahhahahahhhahahahahahahahahhahahahhahahahhhahahahahahahahahhahahahhahahahhhahahahahahahahah ..........",
			tags: ["word", "intrusive", "hellhole"],
			color: bgColors[6],
			files: [],
			fileUrl: null,
		},
		{
			id: "",
			title: "O me! O life!",
			thought: `O me! O life! of the questions of these recurring,

			Of the endless trains of the faithless, of cities fill’d with the foolish,
			
			Of myself forever reproaching myself, (for who more foolish than I, and who more faithless?)
			
			Of eyes that vainly crave the light, of the objects mean, of the struggle ever renew’d,
			
			Of the poor results of all, of the plodding and sordid crowds I see around me,
			
			Of the empty and useless years of the rest, with the rest me intertwined,
			
			The question, O me! so sad, recurring—What good amid these, O me, O life?`,
			tags: ["walt-whitman"],
			color: bgColors[7],
			files: [],
			fileUrl: null,
		},
	];
}

export async function GET(request) {
	console.log("api hit");
	await madeUpDelay(3000);
	return NextResponse.json({ data: getHomeContent() });
}
