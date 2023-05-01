import { seo } from "config";

export default {
  titleTemplate: `${seo.title} | %s`,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: seo.canonical,
    site_name: seo.title,
  },
};
