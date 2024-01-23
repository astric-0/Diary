import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "Diary",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={sourceCodePro.className}>{children}</body>
		</html>
	);
}
