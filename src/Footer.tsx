import * as React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Image,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Footer = () => {
  return (
    <HStack
      as={"footer"}
      zIndex="999"
      position="relative"
      bottom="0"
      justify="center"
      backgroundColor="brand.blue"
      color="white"
      width="full"
      minHeight="100px"
      padding="20px 30px"
    >
      <Text color="white">Footer (to-do)</Text>
    </HStack>
  );
};
