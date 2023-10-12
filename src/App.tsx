import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
  Image,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Heading>CS + SG Project</Heading>
          <Image src="logo-color.svg" w="500px" alt=""/>
          {/* <Logo h="40vmin" pointerEvents="none" /> */}
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
