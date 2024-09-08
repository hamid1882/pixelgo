import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProductSchema from "@/components/scripts/ProductSchema";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "PixelGo | One Stop Digital Solutions For All Your Business needs.",
  description:
    "Boost Your Brand with SEO, Web Dev, Lead Gen & Content Creation  Helping You Grow Online | Let’s Make Your Business Thrive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <ProductSchema />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
