'use client';

import { useEffect } from 'react';

function SeoFaqSchema({ data }) {

  useEffect(() => {
    if (data) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `<p>${faq.answer}</p>`
          }
        }))
      });
      document.head.appendChild(script);

      // Cleanup function to remove the script tag when component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);
  return (
    <></>
  )
}

export default SeoFaqSchema;