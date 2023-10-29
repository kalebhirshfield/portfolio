import { Box } from "@chakra-ui/react";

import { MAX_WIDTH } from "config";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className={"border"}>
      <Box as="header" boxShadow="md">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          h="4rem"
          px={[4, 6, 10, 14, 20]}
          maxW={MAX_WIDTH}
          mx="auto"
        >
          <Navbar />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
