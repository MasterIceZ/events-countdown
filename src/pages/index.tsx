import { Text, Box, usePinInputField } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { timeDeltaFormatOptionsDefaults } from "react-countdown/dist/utils";
import App from './App';
import Footer from '../components/layout/Footer';
import GithubCorner from 'react-github-corner';

const Home = () => {
  return (
    <>
      <App />
    </>
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
