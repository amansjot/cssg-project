import {
  useColorModeValue,
  Heading,
  Image,
  Text,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Stack,
  Badge,
  Box,
  Flex,
  HStack,
  ListItem,
  UnorderedList,
  CardFooter,
  Select,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Listing, listings, Perks } from "../Listings";
import { SearchBar } from "../SearchBar";
import React from "react";

export const ShowListings = (
  query = "",
  category = "",
  numListings?: number
) => {
  const listingbg = useColorModeValue("blue.50", "blue.800");
  const listingtxt = useColorModeValue("black", "white");
  const listingborder = useColorModeValue("blue.600", "blue.900");
  const priceText = useColorModeValue("green.600", "green.200");

  const navigate = useNavigate();

  type SortType = "recent" | "price";
  const [sort, setSort] = React.useState<SortType>("recent");

  const broadenResults = () => {
    navigate("/listings?q=" + query + "&c=");
  };

  const searchAllCategory = () => {
    navigate("/listings?q=&c=" + category);
  };

  const getTimePassed = (dateStr: string): string => {
    let timePassed = "";

    const now = new Date();
    const past = new Date(dateStr);
    const diff = now.getTime() - past.getTime();

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    if (hours < 24) {
      timePassed = `${hours} hour`;
    } else if (days < 21) {
      timePassed = `${days} day`;
    } else if (weeks < 6) {
      timePassed = `${weeks} week`;
    } else {
      timePassed = `${months} month`;
    }

    timePassed += (timePassed.startsWith("1 ") ? "" : "s") + " ago";
    return timePassed;
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const messageSeller = (name: string, email: string) => {
    alert("Contacting " + name + " (" + email + ")");
  };

  let listingsArray: Listing[] = [...listings];

  /* filter by search query */
  if (query) {
    listingsArray = listingsArray.filter((listing) => {
      return listing.keywords.some((keyword) => query.startsWith(keyword));
    });
  }

  /* filter by category */
  if (category) {
    listingsArray = listingsArray.filter((listing) => {
      return listing.category === category;
    });
  }

  const sortCards = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as SortType);
  };

  /* sort according to selection */
  if (sort === "recent") {
    listingsArray.sort((a: Listing, b: Listing): number => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();
      return bDate - aDate;
    });
  } else if (sort === "price") {
    listingsArray.sort((a: Listing, b: Listing): number => {
      return a.price - b.price;
    });
  }
  

  /* truncate listings for homepage */
  if (numListings) {
    listingsArray = listingsArray.slice(0, numListings);
  }

  return (
    <Box m="0">
      {numListings ? (
        <></>
      ) : (
        <Stack>
          <Center fontSize="lg" color="grey" mt="-1" mb="2">
            ({listingsArray.length} result
            {listingsArray.length === 1 ? "" : "s"})
          </Center>
          <Center mb="4">
            Sort by
            <Select width="180px" ml="2" onChange={sortCards}>
              <option value="recent">🕛 Most Recent</option>
              <option value="price">💵 Cheapest</option>
            </Select>
          </Center>
        </Stack>
      )}

      {!numListings && category && listingsArray.length === 0 ? (
        <Center>
          <Stack mt="7" mb="8" spacing="4">
            <Button p="6" onClick={broadenResults}>
              Search {query ? '"' + query + '" in' : ""} All Categories
            </Button>
            <Button p="6" onClick={searchAllCategory}>
              View all listings in{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          </Stack>
        </Center>
      ) : (
        <></>
      )}

      {!numListings && !category && listingsArray.length === 0 ? (
        <Center>
          <Stack mt="7" mb="24" spacing="4">
            <Button p="6" onClick={searchAllCategory}>
              View All Listings
            </Button>
          </Stack>
        </Center>
      ) : (
        <></>
      )}

      <Flex wrap="wrap" justifyContent="center">
        {listingsArray.map((listing: Listing) => {
          return (
            <Box minWidth="sm" height="550px" mb="6">
              <Card
                width="sm"
                height="100%"
                bg={listingbg}
                color={listingtxt}
                borderWidth="1px"
                borderStyle="solid"
                borderColor={listingborder}
                m="10px"
              >
                <CardBody>
                  <Image
                    h="225px"
                    m="0 auto"
                    src={listing.image[0]}
                    alt={`Image for ` + listing.title}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="lg">{listing.title}</Heading>
                    <HStack>
                      <Text color={priceText} fontSize="xl">
                        {formatCurrency(listing.price)}
                        {Object.keys(listing.perks).map(
                          (key: string, index: number): JSX.Element => {
                            const perkKey = key as keyof Perks;
                            const perkColors = [
                              "green",
                              "purple",
                              "blue",
                              "orange",
                            ];
                            return listing.perks[perkKey] ? (
                              <Badge
                                ml="10px"
                                mt="-1"
                                p="2px 6px"
                                colorScheme={perkColors[index]}
                              >
                                {key.replace(/(?=[A-Z])/g, " ")}
                              </Badge>
                            ) : (
                              <></>
                            );
                          }
                        )}
                      </Text>
                    </HStack>
                    <Text color="gray.500" fontSize="md">
                      {getTimePassed(listing.date)} • {listing.location}
                    </Text>
                    <Text>
                      <UnorderedList>
                        {listing.description.map(
                          (item: string): JSX.Element => {
                            return <ListItem>{item}</ListItem>;
                          }
                        )}
                      </UnorderedList>
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter mt="-10">
                  <ButtonGroup mt="5" spacing="2">
                    <Button colorScheme="blue">Add to Cart</Button>
                    <Button
                      colorScheme="green"
                      onClick={() => {
                        messageSeller(
                          listing.seller.name,
                          listing.seller.email
                        );
                      }}
                    >
                      Contact Seller
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

const Listings = () => {
  const mainbg = useColorModeValue("white", "gray.800");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("c") || "";

  return (
    <div>
      <Stack backgroundColor={mainbg} pt={{ base: 2, md: 8 }} pb="10">
        <SearchBar query={query} category={category} />
        <Center mt="7" mb="2">
          <Heading size="xl">
            {query ? `Listings for "${query}"` : "All Listings"}
            {category
              ? ` in ${category.charAt(0).toUpperCase() + category.slice(1)}`
              : ""}
          </Heading>
        </Center>
        {ShowListings(query, category)}
      </Stack>
    </div>
  );
};

export default Listings;
