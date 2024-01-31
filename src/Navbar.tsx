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
  useBoolean,
} from "@chakra-ui/react";
import {
  faCartShopping,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import config from "./config";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const [activePage, setActivePage] = useState<string>("/");

  const handleNavigate = (link: string) => {
    setIsOpen.off();
    setActivePage(link);
  };

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
      height="70px"
      fontSize="19px"
    >
      {/* logo */}
      <HStack position="absolute" left="30px">
        <Link to="/" onClick={() => handleNavigate("/")}>
          <Image src={config.logo} w="50px" alt="CS+SG logo" mr="2" />
        </Link>
        <Link to="/" onClick={() => handleNavigate("/")}>
          <Heading display={{ base: "none", sm: "block" }} fontSize="inherit">
            {config.name}
          </Heading>
        </Link>
      </HStack>

      {/* links */}
      <Stack
        fontWeight="bold"
        gap={{ base: "0", lg: "70px" }}
        mt={{ base: "215px", lg: "0" }}
        align="center"
        justify="center"
        direction={{ base: "column", lg: "row" }}
        width="full"
        visibility={{ base: isOpen ? "visible" : "hidden", lg: "visible" }}
        position={{ base: "absolute", lg: "static" }}
        bg="brand.blue"
      >
        <Link to="/listings" onClick={() => handleNavigate("/listings")}>
          <Text
            borderBottom={{
              base: "2px solid white",
              lg: "2px solid transparent",
            }}
            pb={{ base: "20px", lg: "4px" }}
            mb={{ base: "0", lg: "-4px" }}
            pt={{ base: "20px", lg: "0" }}
            fontSize="inherit"
            w={{ base: "100vw", lg: "auto" }}
            textAlign="center"
            _hover={{
              borderBottom: "2px solid white",
            }}
            transition={{ base: "0s", lg: "0.3s ease" }}
          >
            View Listings
          </Text>
        </Link>
        <Link to="/sell" onClick={() => handleNavigate("/sell")}>
          <Text
            borderBottom={{
              base: "2px solid white",
              lg: "2px solid transparent",
            }}
            pb={{ base: "20px", lg: "4px" }}
            mb={{ base: "0", lg: "-4px" }}
            pt={{ base: "20px", lg: "0" }}
            fontSize="inherit"
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
      <Flex position="absolute" right="20px">
        <ColorModeSwitcher />
        <Link to="/cart" onClick={setIsOpen.off}>
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
                fontSize="19px"
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
        <Link to="/account" onClick={setIsOpen.off}>
          <IconButton
            bg="#00539f"
            border="1px solid #00539f"
            borderRadius="50%"
            ml="5px"
            h="50px"
            w="50px"
            aria-label="Account"
            icon={
              <FontAwesomeIcon fontSize="19px" color="white" icon={faUser} />
            }
            _hover={{
              border: "1px solid white",
              transition: "0.3s ease",
            }}
          />
        </Link>
        {/* toggle nav */}
        <Box display={{ base: "block", lg: "none" }} onClick={setIsOpen.toggle}>
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
                <FontAwesomeIcon fontSize="26px" color="white" icon={faXmark} />
              ) : (
                <FontAwesomeIcon fontSize="22px" color="white" icon={faBars} />
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
