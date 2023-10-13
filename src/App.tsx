import * as React from "react";
import {
  ChakraProvider,
  theme,
  Heading,
  Image,
  Flex,
  HStack,
  Avatar,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Search2Icon } from "@chakra-ui/icons";
// import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HStack
      as={"nav"}
      position="fixed"
      top="0"
      justify="space-between"
      backgroundColor="lightblue"
      width="100%"
      padding="20px 30px"
      height="90px"
      borderBottom="1px solid black"
    >
      <HStack>
        <Image src="logo-color.svg" w="50px" alt="CS+SG logo" mr="2" />
        <Heading size="md">UD Buy & Sell</Heading>
      </HStack>
      <Flex>
        <Avatar
          name="Dan Abrahmov"
          border="1px solid black"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>
    </HStack>
    <Container
      mt="90px"
      maxW="100%"
      textAlign="center"
      padding="25px"
      backgroundColor="white"
    >
      <Container maxW="100%" mb="10">
        <Heading mb="2" fontSize="5xl">
          UD Buy & Sell
        </Heading>
        <Heading size="md" color="grey">by CS for Social Good</Heading>
      </Container>

      <Container maxW="100%">
        <InputGroup w="50%" margin="0 auto">
          <Input
            size="lg"
            borderColor="grey"
            placeholder="What would you like to buy/sell?"
          />
          <InputRightElement mt="1" mr="1" children={<Search2Icon />} />
        </InputGroup>
      </Container>
    </Container>
  </ChakraProvider>
);
