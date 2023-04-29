import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";

import { seo, data } from "config";
import FadeIn from "@rcnoverwatcher/react-fade-in-react-18/lib/FadeIn";

const Projects = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Kaleb Hirshfield - Projects";
  const description = seo.description;

  return (
    <>
      <FadeIn>
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
          <Box>
            <Text py="4" fontSize={["3xl", "4xl"]} fontWeight="700">
              Under construction...
            </Text>
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
              flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
              key={index}
            >
              <Box
                w={{ base: "80%", lg: "35%" }}
                mx={{ base: "auto", lg: "0" }}
                pl={{ lg: isOdd(index) == 1 && "10" }}
                pr={{ lg: isOdd(index) == 0 && "10" }}
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
      </FadeIn>
    </>
  );
};

export default Projects;
