import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "StarVPN",
  description: "StarVPN. Ваш.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.variable} ${mulish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
