import { Text, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Text>Hello World</Text>
    </Box>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      value: new Date().getTime()
    }
  }
}

export default Home;
