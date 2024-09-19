"use client";

import React, { useEffect } from "react";

function ProductSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "http://schema.org",
      "@id": "https://www.godoo.in",
      "@type": "Sole proprietorship",
      name: "Godoo | Get Results with India’s #1 Google Ads Agency for Effective Advertising",
      legalName: "Godoo",
      brand: "World Visa",
      url: "https://www.godoo.in",
      logo: "https://godoo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.39121e90.webp&w=384&q=75",
      description:
        "Maximize ROI with targeted Google Ads services. We create optimized, relevant campaigns to boost visibility, drive quality traffic, and increase conversions.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near 155th/1, 5th Cross, Near New Noble School",
        addressLocality: "Rashad Nagar, Govindapura, Nagavara",
        addressRegion: "Bengaluru",
        postalCode: "560045",
        addressCountry: "India",
      },
      sameAs: [
        "https://www.instagram.com/godoo.in?utm_source=qr&igsh=cmd0bHE1djhkYzQ0",
        "https://godoo.in/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+919480622160",
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
