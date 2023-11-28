import { useState } from "react";
import {
  ChakraProvider,
  theme,
  Heading,
  Image,
  Flex,
  HStack,
  Container,
  Input,
  IconButton,
  Link,
  Text,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Stack,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Search2Icon } from "@chakra-ui/icons";
// import { Logo } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  function handleSearch() {
    alert("You inputted: " + searchQuery);
  }

  return (
    <ChakraProvider theme={theme}>
      <HStack
        as={"nav"}
        zIndex="999"
        position="fixed"
        top="0"
        justify="center"
        backgroundColor="#00539f"
        color="white"
        width="full"
        padding="20px 30px"
        height="80px"
      >
        <HStack position="absolute" left="20px">
          <Link href="/">
            <Image src="logo-color.svg" w="50px" alt="CS+SG logo" mr="2" />
          </Link>
          <a href="/">
            <Heading fontSize="21px">UD Buy & Sell</Heading>
          </a>
        </HStack>
        <HStack
          fontWeight="bold"
          spacing="70px"
          justifyContent="center"
          width="full"
        >
          <Link
            href="/categories"
            borderBottom="2px solid transparent"
            pb="4px"
            fontSize="20px"
            mb="-4px"
            _hover={{
              borderBottom: "2px solid white",
              transition: "0.3s ease",
            }}
          >
            Categories
          </Link>
          <Link
            href="/listings"
            borderBottom="2px solid transparent"
            pb="4px"
            fontSize="20px"
            mb="-4px"
            _hover={{
              borderBottom: "2px solid white",
              transition: "0.3s ease",
            }}
          >
            Listings
          </Link>
          <Link
            href="/sell"
            borderBottom="2px solid transparent"
            pb="4px"
            fontSize="20px"
            mb="-4px"
            _hover={{
              borderBottom: "2px solid white",
              transition: "0.3s ease",
            }}
          >
            Sell an Item
          </Link>
          <Link
            href="/messages"
            borderBottom="2px solid transparent"
            pb="4px"
            fontSize="20px"
            mb="-4px"
            _hover={{
              borderBottom: "2px solid white",
              transition: "0.3s ease",
            }}
          >
            Messages
          </Link>
        </HStack>
        <Flex position="absolute" right="20px">
          <IconButton
            bg="#00539f"
            border="1px solid #00539f"
            borderRadius="50%"
            ml="5px"
            h="50px"
            w="50px"
            aria-label="Search catalog"
            icon={
              <FontAwesomeIcon
                fontSize="22px"
                color="white"
                icon={faCartShopping}
              />
            }
            _hover={{
              border: "1px solid white",
              transition: "0.3s ease",
            }}
          />
          <IconButton
            bg="#00539f"
            border="1px solid #00539f"
            borderRadius="50%"
            ml="5px"
            h="50px"
            w="50px"
            aria-label="Search catalog"
            icon={
              <FontAwesomeIcon fontSize="22px" color="white" icon={faUser} />
            }
            _hover={{
              border: "1px solid white",
              transition: "0.3s ease",
            }}
          />
        </Flex>
      </HStack>

      <Container
        mt="90px"
        maxW="100%"
        textAlign="center"
        padding="25px"
        backgroundColor="white"
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
              height="50px"
              borderColor="#00539f"
              borderRadius="7px 0 0 7px"
              placeholder="What would you like to find?"
              onChange={handleSearchQueryChange}
              _hover={{
                borderColor: "#00539f",
                transition: "0.3s ease",
              }}
            />
            <IconButton
              borderRadius="0 7px 7px 0"
              bg="#00539f"
              color="white"
              border="1px solid #00539f"
              ml="-1px"
              h="50px"
              w="50px"
              aria-label="Search catalog"
              onClick={() => handleSearch()} 
              icon={<Search2Icon/>}
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

      <Stack bg="#eee" pb="60px">
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
            bg="blue.50"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="blue.600"
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
    </ChakraProvider>
  );
};
