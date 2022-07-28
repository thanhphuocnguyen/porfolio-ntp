import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Font from "../components/custom-dom/font";
import { GridItemStyle } from "../components/grid-item";
import MainLayout from "../components/layouts/main";
import theme from "../libs/theme";
import "../styles/globals.css";



function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <GridItemStyle />
      <MainLayout router={router}>
        <AnimatePresence initial={true} exitBeforeEnter >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
