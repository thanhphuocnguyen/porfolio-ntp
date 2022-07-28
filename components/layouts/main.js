import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NavBar from "../navbar";
import NoSsr from "../no-ssr";
import VotexDog from "../votex-dog";

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thanh Phuoc portfolio</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxWidth={"container.md"} pt={20}>
        <NoSsr>
          <VotexDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
