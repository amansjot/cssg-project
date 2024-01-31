import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      bg="#00539f"
      border="1px solid #00539f"
      borderRadius="50%"
      ml="5px"
      h="50px"
      w="50px"
      color="white"
      onClick={toggleColorMode}
      icon={<SwitchIcon fontSize="19px"/>}
      aria-label={`Switch to ${text} mode`}
      _hover={{
        border: "1px solid white",
        transition: "0.3s ease",
      }}
    />
  );
};
