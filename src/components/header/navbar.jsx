import { useState } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.400", "gray.500");
  const color = useColorModeValue("black", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Box
      as="nav"
      display="flex"
      flexDir={{ base: "row-reverse", lg: "row" }}
      alignItems="center"
      fontWeight="500"
      justifyContent={"center"}
      width={"100vw"}
      margin={"0 auto"}
    >
      <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      <chakra.ul
        bg={{ base: bg, lg: "transparent" }}
        color={{ base: "black", lg: color }}
        display={{
          base: isOpen ? "block" : "none",
          lg: "flex",
        }}
        position={{ base: "absolute", lg: "static" }}
        top="5rem"
        left="30%"
        right="30%"
        rounded={{ base: "lg", lg: "none" }}
        py={{ base: "2", lg: "0" }}
        px={{ base: "10", lg: "0" }}
        alignItems={"center"}
        boxShadow={{ base: "xl", lg: "none" }}
        zIndex="2"
      >
        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/" onClick={closeMenu}>
            Home
          </NextLink>
        </chakra.li>
        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/projects" onClick={closeMenu}>
            Projects
          </NextLink>
        </chakra.li>
        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/about" onClick={closeMenu}>
            About
          </NextLink>
        </chakra.li>
        <ColorModeToggle />
      </chakra.ul>
    </Box>
  );
};

export default Navbar;
