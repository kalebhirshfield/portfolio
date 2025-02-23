import { Box, Button, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

import { MAX_WIDTH } from "config";

// Fell free to add your social media accounts!
const socialAccounts = [
  {
    icon: FaGithub,
    path: "https://github.com/kalebhirshfield",
    title: "Github",
  },
  {
    icon: FaLinkedin,
    path: "https://www.linkedin.com/in/kaleb-hirshfield-a8a810270/",
    title: "Linkedin",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/kalebhirshfield",
    title: "Instagram",
  },
];

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button aria-label={item.title}>
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
