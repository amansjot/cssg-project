import * as React from "react";
import { HStack, IconButton, Input, useColorModeValue } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const SearchBar = (props: any) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const navigate = useNavigate();
  const inputbg = useColorModeValue("white", "gray.750");

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    navigate("/listings?q=" + searchQuery);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <HStack w="100%" maxW="600px" margin="0 auto" spacing="0">
      <Input
        size="lg"
        name="search"
        height="60px"
        borderColor="brand.blue"
        borderWidth="2px"
        fontSize="20px"
        borderRadius="7px 0 0 7px"
        backgroundColor={inputbg}
        onKeyDown={handleKeyDown}
        placeholder="What would you like to find?"
        // value={props.value}
        onChange={handleSearchQueryChange}
        _hover={{
          borderColor: "brand.blue",
          transition: "0.3s ease",
        }}
      />
      <IconButton
        borderRadius="0 7px 7px 0"
        backgroundColor="brand.blue"
        color="white"
        border="2px solid brand.blue"
        ml="-1px"
        h="60px"
        w="60px"
        aria-label="Search catalog"
        onClick={handleSearch}
        icon={<Search2Icon fontSize="22px" />}
        _hover={{
          bg: "brand.blue",
          color: "brand.yellow",
          transition: "0.3s ease",
        }}
      />
    </HStack>
  );
};
