import type { Metadata } from "next";
import { Russo_One, Rajdhani } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  variable: "--font-russo-one",
  weight: "400",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meiske | Informatics & AI",
  description: "Portfolio of Meiske, Informatics student at Batam State Polytechnic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${russoOne.variable} ${rajdhani.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
