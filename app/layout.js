import { Source_Code_Pro } from "next/font/google";
import { Nav } from "@/components/partials";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "heretics",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={sourceCodePro.className}>
				<Nav />
				<div className="w-screen h-screen overflow-x-hidden">
					{children}
				</div>
			</body>
		</html>
	);
}
