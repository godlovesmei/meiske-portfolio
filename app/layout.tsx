import type { Metadata } from "next";
import "./globals.css";
import Loader from "../components/Loader";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL('https://meiske.dev'),
  title: "Meiske | AI & Software Engineer",
  description: "Portfolio of Meiske Sahertian, Informatics student at Batam State Polytechnic specializing in AI, SWE, and scalable systems.",
  keywords: ["Meiske Sahertian", "Software Engineer", "AI Engineer", "Portfolio", "Next.js", "Cyberpunk", "Batam State Polytechnic"],
  authors: [{ name: "Meiske Sahertian" }],
  openGraph: {
    title: "Meiske | AI & Software Engineer",
    description: "Portfolio of Meiske Sahertian, building AI applications and scalable systems.",
    url: "https://meiske.dev",
    siteName: "Meiske Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meiske | AI & Software Engineer",
    description: "Portfolio of Meiske Sahertian, building AI applications and scalable systems.",
    images: ["/profile.jpeg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Loader />
        <div className="cursor-glow" id="cursor-glow" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
