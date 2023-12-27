import * as React from "react";
import {
  Flex,
  Heading,
  Image,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Navbar = () => {
  return (
    <HStack
      as={"nav"}
      zIndex="999"
      position="fixed"
      top="0"
      justify="center"
      backgroundColor="#00539f"
      color="white"
      width="full"
      padding="20px 30px"
      height="80px"
    >
      <HStack position="absolute" left="20px">
        <Link href="/">
          <Image src="logo-color.svg" w="50px" alt="CS+SG logo" mr="2" />
        </Link>
        <a href="/">
          <Heading fontSize="21px">UD Buy & Sell</Heading>
        </a>
      </HStack>
      <HStack
        fontWeight="bold"
        spacing="70px"
        justifyContent="center"
        width="full"
      >
        <Link
          href="/categories"
          borderBottom="2px solid transparent"
          pb="4px"
          fontSize="20px"
          mb="-4px"
          _hover={{
            borderBottom: "2px solid white",
            transition: "0.3s ease",
          }}
        >
          Categories
        </Link>
        <Link
          href="/listings"
          borderBottom="2px solid transparent"
          pb="4px"
          fontSize="20px"
          mb="-4px"
          _hover={{
            borderBottom: "2px solid white",
            transition: "0.3s ease",
          }}
        >
          Listings
        </Link>
        <Link
          href="/sell"
          borderBottom="2px solid transparent"
          pb="4px"
          fontSize="20px"
          mb="-4px"
          _hover={{
            borderBottom: "2px solid white",
            transition: "0.3s ease",
          }}
        >
          Sell an Item
        </Link>
      </HStack>
      <Flex position="absolute" right="20px">
        <ColorModeSwitcher/>
        <IconButton
          bg="#00539f"
          border="1px solid #00539f"
          borderRadius="50%"
          ml="5px"
          h="50px"
          w="50px"
          aria-label="Search catalog"
          icon={
            <FontAwesomeIcon
              fontSize="22px"
              color="white"
              icon={faCartShopping}
            />
          }
          _hover={{
            border: "1px solid white",
            transition: "0.3s ease",
          }}
        />
        <IconButton
          bg="#00539f"
          border="1px solid #00539f"
          borderRadius="50%"
          ml="5px"
          h="50px"
          w="50px"
          aria-label="Search catalog"
          icon={<FontAwesomeIcon fontSize="22px" color="white" icon={faUser} />}
          _hover={{
            border: "1px solid white",
            transition: "0.3s ease",
          }}
        />
      </Flex>
    </HStack>
  );
};
