"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

function GAScript() {
  return (
    <GoogleAnalytics
      strategy="lazyOnload"
      gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
    />
  );
}

export default GAScript;
