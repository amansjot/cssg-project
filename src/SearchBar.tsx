import * as React from "react";
import {
  HStack,
  IconButton,
  Input,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { categories, Category } from "./Categories";

interface SearchBarProps {
  query: string;
  category: string;
}

export const SearchBar = (props: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = React.useState<string>(props.query);
  const [category, setCategory] = React.useState<string>(props.category);

  const navigate = useNavigate();
  const inputbg = useColorModeValue("white", "gray.750");

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleSearch = () => {
    navigate("/listings?q=" + searchQuery + "&c=" + category);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <HStack w="95%" maxW="800px" margin="0 auto" spacing="0">
      <Select
        value={category}
        size="md"
        name="category"
        height="60px"
        mr="2"
        width="270px"
        borderColor="brand.blue"
        borderWidth="2px"
        onChange={handleCategoryChange}
        _hover={{
          borderColor: "brand.blue",
          transition: "0.3s ease",
        }}
      >
        {[...categories].map((category: Category): JSX.Element => {
          return (
            <option value={category.value}>
              {category.name || "All Categories"} {category.emoji}
            </option>
          );
        })}
      </Select>
      <Input
        value={searchQuery}
        size="lg"
        name="search"
        height="60px"
        borderColor="brand.blue"
        borderWidth="2px"
        borderRadius="7px 0 0 7px"
        backgroundColor={inputbg}
        onKeyDown={handleKeyDown}
        placeholder={ category ? `Search ${category}...` : "What would you like to find?"}
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
        w="85px"
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
