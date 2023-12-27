import { useState } from "react";
import {
  useColorModeValue,
  Heading,
  Image,
  HStack,
  Container,
  Input,
  IconButton,
  Text,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Stack
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Navbar } from "./Navbar";
import { ChatBot } from "./ChatBot";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  function handleSearch() {
    alert("You inputted: " + searchQuery);
  }

  const mainbg = useColorModeValue("white", "gray.800");
  const inputbg = useColorModeValue("white", "gray.700");
  const greybg = useColorModeValue("gray.300", "gray.600");
  const listingbg = useColorModeValue("blue.50", "blue.800");
  const listingtxt = useColorModeValue("black", "white");
  const listingborder = useColorModeValue("blue.600", "blue.900");

  return (
    <div>
      <Navbar />
      <Container
        mt="90px"
        maxW="100%"
        textAlign="center"
        padding="25px"
        backgroundColor={mainbg}
      >
        <Container maxW="100%" mb="10">
          <Image
            src="logo-color.svg"
            w="100px"
            h="100px"
            m="0 auto"
            alt="CS+SG logo"
          />
          <Heading mb="2" fontSize="5xl">
            UD Buy & Sell
          </Heading>
          <Heading size="md" color="grey">
            by CS for Social Good
          </Heading>
        </Container>

        <Container maxW="100%">
          <HStack w="100%" maxW="500px" margin="0 auto" spacing="0">
            <Input
              size="lg"
              name="search"
              height="50px"
              borderColor="#00539f"
              borderRadius="7px 0 0 7px"
              backgroundColor={inputbg}
              // color="black"
              placeholder="What would you like to find?"
              onChange={handleSearchQueryChange}
              _hover={{
                borderColor: "#00539f",
                transition: "0.3s ease",
              }}
            />
            <IconButton
              borderRadius="0 7px 7px 0"
              backgroundColor="#00539f"
              color="white"
              border="1px solid #00539f"
              ml="-1px"
              h="50px"
              w="50px"
              aria-label="Search catalog"
              onClick={() => handleSearch()}
              icon={<Search2Icon />}
              _hover={{
                bg: "#00539f",
                color: "#ffd200",
                transition: "0.3s ease",
              }}
            />
          </HStack>
        </Container>
      </Container>

      <br />
      <Divider></Divider>

      <Stack backgroundColor={greybg} pb="60px">
        <br />
        <br />
        <Center>
          {" "}
          <Heading size="xl">Listings</Heading>
        </Center>
        <br />
        <Center>
          <Card
            maxW="sm"
            bg={listingbg}
            color={listingtxt}
            borderWidth="1px"
            borderStyle="solid"
            borderColor={listingborder}
          >
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Chair</Heading>
                <Text fontSize="16px">FREE SHIPPING</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="green.600" fontSize="2xl">
                  $5
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Center>
      </Stack>

      <ChatBot />
    </div>
  );
};
