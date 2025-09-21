import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns:[new URL('https://static1.mujerhoy.com/**'), 
                  new URL('https://imagessl.casadellibro.com/**'),
                  new URL('https://trabalibros.com/**'),
                  new URL('https://upload.wikimedia.org/**'),
                  new URL ('https://images-na.ssl-images-amazon.com/**'),
                  new URL ('https://images.gr-assets.com/**'),
                  new URL ('https://unsplash.com/**')]
  }
  /* config options here */
};

export default nextConfig;
