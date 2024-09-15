import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProductSchema from "@/components/scripts/ProductSchema";
import SeoRatings from "@/components/scripts/SeoRatings";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "PixelGo | One Stop Digital Solutions For All Your Business needs.",
  description:
    "Maximize ROI with targeted Google Ads services. We create optimized, relevant campaigns to boost visibility, drive quality traffic, and increase conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        property="og:title"
        content="PixelGo | One Stop Digital Solutions For All Your Business needs."
      />
      <meta
        property="og:description"
        content="Maximize ROI with targeted Google Ads services. We create optimized, relevant campaigns to boost visibility, drive quality traffic, and increase conversions."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dufbsunt4/image/upload/v1726417797/Pixelgo/q5an9h7gximfym4uhcqc.webp "
      />
      <meta
        property="facebook:title"
        content="PixelGo | One Stop Digital Solutions For All Your Business needs."
      />
      <meta
        property="facebook:description"
        content="Maximize ROI with targeted Google Ads services. We create optimized, relevant campaigns to boost visibility, drive quality traffic, and increase conversions."
      />
      <meta
        property="facebook:image"
        content="https://res.cloudinary.com/dufbsunt4/image/upload/v1726417797/Pixelgo/q5an9h7gximfym4uhcqc.webp "
      />
      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:title"
        content="PixelGo | One Stop Digital Solutions For All Your Business needs."
      />
      <meta
        property="twitter:description"
        content="Maximize ROI with targeted Google Ads services. We create optimized, relevant campaigns to boost visibility, drive quality traffic, and increase conversions."
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dufbsunt4/image/upload/v1726417797/Pixelgo/q5an9h7gximfym4uhcqc.webp"
      />
      <link rel="alternate" href="https://pixelgo.in" hrefLang="en" />
      <body className={`${poppins.variable}`}>
        <main>
          <ProductSchema />
          <SeoRatings />
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
