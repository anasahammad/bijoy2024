import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bijoy24",
  description: "Welcome to Bangladesh 2.0",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()
  return (

    <html lang="en">
      <body className={inter.className}>
      <Navbar session={session}/>
        {children}
        </body>
    </html>
  );
}