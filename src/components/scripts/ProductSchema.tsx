"use client";

import React, { useEffect } from "react";

function ProductSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "http://schema.org",
      "@id": "https://www.pixelgo.in",
      "@type": "Sole proprietorship",
      name: "PixelGo | One Stop Digital Solutions For All Your Business needs.",
      legalName: "PixelGo",
      brand: "World Visa",
      url: "https://www.pixelgo.in",
      logo: "https://pixelgo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.39121e90.webp&w=384&q=75",
      description:
        "Boost Your Brand with SEO, Web Dev, Lead Gen & Content Creation  Helping You Grow Online | Let’s Make Your Business Thrive",
      address: {
        "@type": "PostalAddress",
        streetAddress: "155/1, 5th cross, near new noble school",
        addressLocality: "Rashad Nagar, Govindapura, Nagavara",
        addressRegion: "Bengaluru",
        postalCode: "560045",
        addressCountry: "India",
      },
      sameAs: [
        "https://www.facebook.com/people/PixelGo/61565740584919/",
        "https://www.instagram.com/pixelgo.in/",
        "https://pixelgo.in/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91 90080 08772",
          contactType: "Customer Service",
          areaServed: ["India"],
        },
      ],
    });
    document.head.appendChild(script);

    // Cleanup function to remove the script tag when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return <></>;
}

export default ProductSchema;
