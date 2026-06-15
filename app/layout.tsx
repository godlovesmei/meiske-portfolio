import type { Metadata } from "next";
import { Russo_One, Rajdhani } from "next/font/google";
import "./globals.css";
import Loader from "../components/Loader";
import Nav from "../components/Nav";

const russoOne = Russo_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Meiske Sahertian',
  url: 'https://meiske.dev',
  image: 'https://meiske.dev/profile.jpeg',
  jobTitle: 'AI & Software Engineer',
  description: 'Informatics student at Batam State Polytechnic specializing in AI, SWE, and scalable systems.',
  sameAs: [
    'https://github.com/godlovesmei',
    'https://www.linkedin.com/in/meiskesahertian/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${russoOne.variable} ${rajdhani.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Loader />
        <div className="cursor-glow" id="cursor-glow" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
