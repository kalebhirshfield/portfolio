import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <NextLink href="/" passHref legacyBehavior>
      <chakra.a fontSize="2rem" fontWeight="700">
        Kaleb Hirshfield
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
