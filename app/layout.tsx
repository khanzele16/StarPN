import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "StarPN",
  description: "StarPN. Ваш интернет на скорости света.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`w-full ${inter.variable} ${mulish.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
