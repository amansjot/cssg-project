import * as React from "react";
import { Link, Stack, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      py="30px"
    >
      <Text>
        {config.name} • {year}
      </Text>
      <Text>Developed by CS + Social Good</Text>
      <HStack fontSize="30px" spacing="4">
        <Link
          href="https://www.instagram.com/ud_cssg"
          title="UD CSSG Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>{" "}
        •{" "}
        <Link href="https://discord.gg/aDN8cv5w8S" title="UD CSSG Discord">
        <FontAwesomeIcon icon={faDiscord} />
        </Link>
      </HStack>
    </Stack>
  );
};
