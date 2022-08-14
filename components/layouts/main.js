import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import dynamic from 'next/dynamic'
import NavBar from "../navbar";
import VoxelDogLoader from '../votex-dog-loader'
const LazyVoxelDog = dynamic(() => import('../votex-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thanh Phuoc portfolio</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxWidth={"container.md"} pt={20}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
