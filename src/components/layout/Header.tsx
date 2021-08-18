import { Box, Flex, Heading } from "@chakra-ui/react";

import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">

      </AccessibleLink>

      <Box marginTop="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
