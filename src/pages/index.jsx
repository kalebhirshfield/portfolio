import {
  Box,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { seo, data } from "config";

const Home = () => {
  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NextSeo
          title={title}
          description={description}
          canonical={seo.canonical}
          openGraph={{
            title,
            description,
            images: [
              {
                url: `${seo.canonical}personalLogo.png`,
                width: "350px",
                height: "350px",
                alt: "my logo",
              },
            ],
          }}
        />

        <Box
          as="section"
          d="flex"
          alignItems="center"
          flexDir="column"
          textAlign="center"
          py="4"
        >
          <NextImage
            className="logo"
            src="/personalLogo.png"
            width="350"
            height="350"
            alt="my logo"
            placeholder="blur"
            blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
            priority
          />
          <Box>
            <Heading
              className="header"
              as="h1"
              fontSize="2xl"
              fontWeight="500"
              py="2"
              margin="10"
            >
              <Typewriter
                options={{
                  autoStart: true,
                  delay: 35,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Hello, I'm Kaleb. Studying Computer Science, Physics and Maths.",
                    )
                    .start();
                }}
              />
            </Heading>
            <ChakraLink className="links" href="/projects" mx="2">
              <Button>Projects</Button>
            </ChakraLink>
            <ChakraLink className="links" href="/about" mx="2">
              <Button>About</Button>
            </ChakraLink>
            <ChakraLink
              className="links"
              href="mailto:kaleb@kalebhirshfield.com"
              mx="2"
            >
              <Button>Email Me</Button>
            </ChakraLink>
          </Box>
        </Box>

        <Box
          as="section"
          d="flex"
          alignItems="center"
          flexDir="column"
          textAlign={{ base: "center", lg: "left" }}
          py="4"
        >
          {data.map((item, index) => (
            <Box
              d={{ lg: "flex" }}
              justifyContent={{ lg: "center" }}
              alignItems={{ lg: "center" }}
              flexDir={{ lg: isOdd(index) === 1 && "row-reverse" }}
              key={index}
            >
              <Box
                w={{ base: "80%", lg: "35%" }}
                mx={{ base: "auto", lg: "0" }}
                pl={{ lg: isOdd(index) === 1 && "10" }}
                pr={{ lg: isOdd(index) === 0 && "10" }}
              >
                <NextImage
                  src={item.image}
                  width="500"
                  height="500"
                  alt={item.title}
                  placeholder="blur"
                  blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                />
              </Box>

              <Box w={{ lg: "50%" }}>
                <Heading as="h1">{item.title}</Heading>
                <Text py="4">{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </motion.main>
    </>
  );
};

export default Home;
