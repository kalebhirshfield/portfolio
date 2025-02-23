import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

import theme from "@/theme/index";
import Layout from "@/layouts/global";
import SEO from "next-seo.config";

import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />

    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    <Analytics />
  </>
);

export default MyApp;
