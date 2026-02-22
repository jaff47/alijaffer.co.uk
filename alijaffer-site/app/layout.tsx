import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Jaffer - Solution Architect",
  description: "Personal website of Ali Jaffer, Solution Architect specializing in AWS and cloud infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
