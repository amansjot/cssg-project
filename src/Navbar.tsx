import * as React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Image,
  HStack,
  IconButton,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import config from "./config";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <HStack
      as={"nav"}
      zIndex="999"
      position="fixed"
      top="0"
      justify="center"
      backgroundColor="brand.blue"
      color="white"
      width="full"
      padding="20px 30px"
      height="80px"
    >
      {/* logo */}
      <HStack position="absolute" left="30px">
        <Link to="/" onClick={closeNav}>
          <Image src={config.logo} w="50px" alt="CS+SG logo" mr="2" />
        </Link>
        <Link to="/">
          <Heading display={{ base: "none", sm: "block" }} fontSize="21px">
            {config.name}
          </Heading>
        </Link>
      </HStack>

      {/* links */}
      <Stack
        fontWeight="bold"
        gap={{ base: "0", lg: "70px" }}
        mt={{ base: "300px", lg: "0" }}
        align="center"
        justify="center"
        direction={{ base: "column", lg: "row"}}
        width="full"
        visibility={{ base: isOpen ? "visible" : "hidden", lg: "visible" }}
        position={{ base: "absolute", lg: "static" }}
        bg="brand.blue"
      >
        <Link to="/categories" onClick={closeNav}>
          <Text
            borderBottom="2px solid transparent"
            pb={{ base: "20px", lg: "4px" }}
            mb={{ base: "0", lg: "-4px" }}
            pt={{ base: "20px", lg: "0" }}
            fontSize="20px"
            w={{ base: "100vw", lg: "auto" }}
            textAlign="center"
            _hover={{
              borderBottom: "2px solid white",
            }}
            transition={{ base: "0s", lg: "0.3s ease" }}
          >
            Categories
          </Text>
        </Link>
        <Link to="/listings" onClick={closeNav}>
          <Text
            borderBottom="2px solid transparent"
            pb={{ base: "20px", lg: "4px" }}
            mb={{ base: "0", lg: "-4px" }}
            pt={{ base: "20px", lg: "0" }}
            fontSize="20px"
            w={{ base: "100vw", lg: "auto" }}
            textAlign="center"
            _hover={{
              borderBottom: "2px solid white",
            }}
            transition={{ base: "0s", lg: "0.3s ease" }}
          >
            Listings
          </Text>
        </Link>
        <Link to="/sell" onClick={closeNav}>
          <Text
            borderBottom="2px solid transparent"
            pb={{ base: "20px", lg: "4px" }}
            mb={{ base: "0", lg: "-4px" }}
            pt={{ base: "20px", lg: "0" }}
            fontSize="20px"
            w={{ base: "100vw", lg: "auto" }}
            textAlign="center"
            _hover={{
              borderBottom: "2px solid white",
            }}
            transition={{ base: "0s", lg: "0.3s ease" }}
          >
            Sell an Item
          </Text>
        </Link>
      </Stack>

      {/* icons */}
      <Flex
        position="absolute"
        right="20px"
        // display={{ base: "none", lg: "block" }}
      >
        <ColorModeSwitcher />
        <Link to="/cart">
          <IconButton
            bg="#00539f"
            border="1px solid #00539f"
            borderRadius="50%"
            ml="5px"
            h="50px"
            w="50px"
            aria-label="Cart"
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
        </Link>
        <Link to="/account">
          <IconButton
            bg="#00539f"
            border="1px solid #00539f"
            borderRadius="50%"
            ml="5px"
            h="50px"
            w="50px"
            aria-label="Account"
            icon={
              <FontAwesomeIcon fontSize="22px" color="white" icon={faUser} />
            }
            _hover={{
              border: "1px solid white",
              transition: "0.3s ease",
            }}
          />
        </Link>
        {/* toggle nav */}
        <Box display={{ base: "block", lg: "none" }} onClick={toggleNav}>
          <IconButton
            bg="#00539f"
            border="1px solid #00539f"
            borderRadius="50%"
            ml="5px"
            h="50px"
            w="50px"
            aria-label="Cart"
            icon={
              isOpen ? (
                <CloseIcon fontSize="17px" color="white" />
              ) : (
                <HamburgerIcon fontSize="24px" color="white" />
              )
            }
            _hover={{
              border: "1px solid white",
              transition: "0.3s ease",
            }}
          />
        </Box>
      </Flex>
    </HStack>
  );
};
