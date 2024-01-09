import {
  useColorModeValue,
  Heading,
  Image,
  Text,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Stack,
  Badge,
  Box,
  Flex,
  HStack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { listings } from "../Listings";
import { SearchBar } from "../SearchBar";

export const ShowListings = (query: string = "", numListings: number | "all" = "all") => {
  const listingbg: string = useColorModeValue("blue.50", "blue.800");
  const listingtxt: string = useColorModeValue("black", "white");
  const listingborder: string = useColorModeValue("blue.600", "blue.900");

  const getTimePassed = (dateStr: string): string => {
    let timePassed: string = "";

    const now: Date = new Date();
    const past: Date = new Date(dateStr);
    const diff: number = now.getTime() - past.getTime();

    const hours: number = Math.floor(diff / (1000 * 60 * 60));
    const days: number = Math.floor(hours / 24);
    const weeks: number = Math.floor(days / 7);
    const months: number = Math.floor(days / 30);

    if (hours < 24) {
      timePassed = `${hours} hour`;
    } else if (days < 7) {
      timePassed = `${days} day`;
    } else if (weeks < 4) {
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

  let listingsArray = [...listings];

  /* filter by search query */
  if (query) {
    listingsArray = listings.filter((listing) => {
      return listing.keywords.some((keyword) => query.startsWith(keyword));
    });
  }

  /* sort by date - recent */ 
  listingsArray.sort((a: any, b: any) => {
    const aDate: number = new Date(a.date).getTime();
    const bDate: number = new Date(b.date).getTime();
    return bDate - aDate;
  });

  /* truncate listings for homepage */
  if (numListings !== "all") {
    listingsArray = listingsArray.slice(0, numListings);
  }

  return listingsArray.map((listing): JSX.Element => {
    return (
      <Box minWidth="sm">
        <Card
          width="sm"
          maxHeight="xl"
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
              src={listing.image}
              alt={`Image for ` + listing.title}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="lg">{listing.title}</Heading>
              <Text color="gray.500" fontSize="md">
                {getTimePassed(listing.date)} • {listing.location}
              </Text>
              <Text>
                <UnorderedList>
                  {listing.description.map((item: string): JSX.Element => {
                    return <ListItem>{item}</ListItem>;
                  })}
                </UnorderedList>
              </Text>
              <HStack>
                <Text color="green.600" fontSize="xl">
                  {formatCurrency(listing.price)}
                  {listing.details.freeDelivery ? (
                    <Badge ml="10px" mt="-1" p="2px 6px" colorScheme="green">
                      FREE DELIVERY
                    </Badge>
                  ) : (
                    ""
                  )}
                </Text>
              </HStack>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button colorScheme="blue">Add to cart</Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  messageSeller(listing.seller.name, listing.seller.email);
                }}
              >
                Message Seller
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    );
  });
};

const Listings = () => {
  const mainbg: string = useColorModeValue("white", "gray.800");
  const [searchParams] = useSearchParams();
  const query: string = searchParams.get("q") || "";

  return (
    <div>
      <Stack backgroundColor={mainbg} py="60px">
        <Center>
          {" "}
          <Heading size="xl">
            {query ? `Listings for "${query}"` : "All Listings"}
          </Heading>
        </Center>
        <br />
        <SearchBar value={query} />
        <br />
        <Flex wrap="wrap" justifyContent="center">
          {ShowListings(query, "all")}
        </Flex>
      </Stack>
    </div>
  );
};

export default Listings;
