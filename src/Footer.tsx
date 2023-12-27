import * as React from "react";
import {
  HStack,
  Text,
} from "@chakra-ui/react";

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
