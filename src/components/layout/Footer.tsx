import { Flex, Link, Text } from "@chakra-ui/react";
import styles from '../../styles/global.css';

const Footer = () => {
  return (
    <Flex>
      <div className="footer">
        <Text>
            {new Date().getFullYear()} -{" "}
          <Link href="https://github.com/MasterIceZ" isExternal>
            MasterIceZ
          </Link>
        </Text>
      </div>
    </Flex>
  );
};

export default Footer;
