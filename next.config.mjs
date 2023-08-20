import "./src/env.mjs";

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

/** @type {import("next").NextConfig} */
const config = {
  /** ... */
};

export default config;
