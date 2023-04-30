import { seo } from "config";

export default {
  titleTemplate: `%s | ${seo.title}`,
  openGraph: {
    type: "website",
    locale: "en-GB",
    url: seo.canonical,
    site_name: seo.title,
  },
};
