"use client";

import { useEffect } from "react";

function SeoRatings({ name = "Godoo", rating = "4.8", reviewCount = "3716" }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    script.innerHTML = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Product",
      name: name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating,
        reviewCount: reviewCount,
      },
    });
    document.head.appendChild(script);

    // Cleanup function to remove the script tag when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return <></>;
}

export default SeoRatings;
