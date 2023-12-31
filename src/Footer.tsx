import * as React from "react";
import { Link, Stack, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import config from "./config";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Stack
      as={"footer"}
      zIndex="999"
      position="relative"
      bottom="0"
      alignItems="center"
      backgroundColor="brand.blue"
      color="white"
      width="full"
      py="28px"
    >
      <Text pt="3">
        {config.name} • {year}
      </Text>
      <Text>Developed by CS + Social Good</Text>
      <HStack fontSize="30px" spacing="5">
        <Link
          href="https://www.instagram.com/ud_cssg"
          target="blank"
          title="UD CSSG Instagram"
          _hover={{
            color: "#c1558b",
            transition: "0.4s ease-in-out",
          }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>{" "}
        •{" "}
        <Link
          href="https://discord.gg/aDN8cv5w8S"
          target="blank"
          title="UD CSSG Discord"
          _hover={{
            color: "#7289da",
            transition: "0.4s ease-in-out",
          }}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
      </HStack>
    </Stack>
  );
};
