const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
    images: {
        domains: [
            "kalebhirshfielduk.files.wordpress.com",
            "i.imgur.com"
        ],
    }
};

module.exports = withMDX(nextConfig);
