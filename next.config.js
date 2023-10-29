const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
    images: {
        remotePatterns: [
            {
                hostname: "kalebhirshfielduk.files.wordpress.com",
            },
            {
                hostname: "i.imgur.com",
            }
        ],
    }
};

module.exports = withMDX(nextConfig);
