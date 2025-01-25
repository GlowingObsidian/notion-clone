import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ConvexProvider from "./components/providers/ConvexProvider";

export const metadata: Metadata = {
  title: "Notate",
  description: "The better note-taking app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ConvexProvider>{children}</ConvexProvider>
      </body>
    </html>
  );
}
