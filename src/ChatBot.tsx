import * as React from "react";
import { Button } from "@chakra-ui/react";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChatBot = () => {
  return (
    <Button
        position="fixed"
        bottom="30px"
        right="30px"
        maxWidth="150px"
        backgroundColor="#00539f"
        padding="25px"
        fontSize="20px"
        color="white"
        zIndex="9999"
        borderRadius="30px"
        _hover={{
          opacity: "0.8",
          transition: "0.3s ease",
        }}
      >
        <b>Chat</b>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon fontSize="22px" color="white" icon={faMessage} />
      </Button>
  );
};
