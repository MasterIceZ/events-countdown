import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";
import GithubIcon from "./Github";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">

      </AccessibleLink>

      <Box marginLeft="5" marginTop="8">
        <ThemeToggle />
      </Box>
      <Box marginLeft="3" marginTop="8">
        <Link href="https://github.com/mastericez/events-countdown">
          <GithubIcon />
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
