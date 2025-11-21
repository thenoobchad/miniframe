import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/navbar";



export const metadata: Metadata = {
  title: "Roast Me",
  description: "Get roasted. Mint the pain",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<meta property="fc:frame" content="vNext" />
			<meta property="fc:frame:miniapp" content="true" />
			<meta property="fc:frame:miniapp:icon" content="/icon.png" />
			<meta property="fc:frame:miniapp:name" content="Roast Me" />
		  <body className={`antialiased`}>
			 <Navbar/> 
			  {children}</body>
		</html>
	);
}
