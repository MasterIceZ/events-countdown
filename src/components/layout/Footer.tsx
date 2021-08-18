import { Flex, Link, Text, Box } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import React, { Component, Fragment } from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <Flex>
      <Box marginBottom="auto">
        <Text id={styles.bot}>
          {new Date().getFullYear()} -{" "}
          <Link href="https://github.com/MasterIceZ" isExternal>
            MasterIceZ
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
