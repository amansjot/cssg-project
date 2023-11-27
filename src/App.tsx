// import * as React from "react";
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
  IconButton,
  Link,
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
      justify="center"
      backgroundColor="#00539f"
      color="white"
      width="full"
      padding="20px 30px"
      height="90px"
      borderBottom="1px solid black"
    >
      <HStack position="absolute" left="20px">
        <Image src="logo-color.svg" w="50px" alt="CS+SG logo" mr="2" />
        <Heading size="md">UD Buy & Sell</Heading>
      </HStack>
      <HStack fontWeight="bold" spacing="70px" justifyContent="center" width="full">
        <Link
          href="/categories"
          borderBottom="2px solid transparent"
          pb="4px"
          fontSize="20px"
          mb="-4px"
          _hover={{
            borderBottom: "2px solid white",
          }}
        >
          Categories
        </Link>
        <Link
          href="/categories"
          borderBottom="2px solid transparent"
          pb="4px"
          fontSize="20px"
          mb="-4px"
          _hover={{
            borderBottom: "2px solid white",
          }}
        >
          Listings
        </Link>
        <Link
          href="/categories"
          borderBottom="2px solid transparent"
          pb="4px"
          fontSize="20px"
          mb="-4px"
          _hover={{
            borderBottom: "2px solid white",
          }}
        >
          Sell an Item
        </Link>
        <Link
          href="/categories"
          borderBottom="2px solid transparent"
          pb="4px"
          fontSize="20px"
          mb="-4px"
          _hover={{
            borderBottom: "2px solid white",
          }}
        >
          Messages
        </Link>
      </HStack>
      <Flex position="absolute" right="20px">
        <IconButton
          bg="white"
          border="1px solid black"
          borderRadius="50%"
          ml="-1px"
          h="50px"
          w="50px"
          aria-label="Search catalog"
          icon={<Avatar name="User" src="https://i.imgur.com/AtqnU7W.png" />}
          _hover={{
            bg: "#EFEFEF",
          }}
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
        <Image
          src="logo-color.svg"
          w="100px"
          h="100px"
          m="0 auto"
          alt="CS+SG logo"
        />
        <Heading mb="2" fontSize="5xl">
          UD Buy & Sell
        </Heading>
        <Heading size="md" color="grey">
          by CS for Social Good
        </Heading>
      </Container>

      <Container maxW="100%">
        <HStack w="100%" maxW="500px" margin="0 auto" spacing="0">
          <Input
            size="lg"
            height="50px"
            borderColor="grey"
            borderRadius="7px 0 0 7px"
            placeholder="What would you like to find?"
            _hover={{
              borderColor: "grey",
            }}
          />
          <IconButton
            borderRadius="0 7px 7px 0"
            bg="white"
            border="1px solid grey"
            ml="-1px"
            h="50px"
            w="50px"
            aria-label="Search catalog"
            icon={<Search2Icon />}
            _hover={{
              bg: "#EFEFEF",
            }}
          />
        </HStack>
      </Container>
    </Container>
  </ChakraProvider>
);
