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
  Stack,
  Box,
  Wrap,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import config from '../config';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  function handleSearch() {
    navigate("/listings?q=" + searchQuery);
  }

  const mainbg = useColorModeValue("white", "gray.800");
  const inputbg = useColorModeValue("white", "gray.750");
  const greybg = useColorModeValue("gray.300", "gray.700");
  const listingbg = useColorModeValue("blue.50", "blue.800");
  const listingtxt = useColorModeValue("black", "white");
  const listingborder = useColorModeValue("blue.600", "blue.900");
  const linkcolor = useColorModeValue("blue.500", "blue.300");

  return (
    <div>
      <Container
        maxW="100%"
        textAlign="center"
        padding="25px"
        backgroundColor={mainbg}
      >
        <Container maxW="100%" mb="10">
          <Image
            src={config.logo}
            w="100px"
            h="100px"
            m="0 auto"
            alt="CS+SG logo"
          />
          <Heading mb="2" fontSize="5xl">
            {config.name}
          </Heading>
          <Heading size="md" color="grey">
            by CS + Social Good
          </Heading>
        </Container>

        <Container maxW="100%">
          <HStack w="100%" maxW="600px" margin="0 auto" spacing="0">
            <Input
              autoFocus
              size="lg"
              name="search"
              height="60px"
              borderColor="brand.blue"
              borderWidth="2px"
              fontSize="20px"
              borderRadius="7px 0 0 7px"
              backgroundColor={inputbg}
              placeholder="What would you like to find?"
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
              onClick={() => handleSearch()}
              icon={<Search2Icon fontSize="22px" />}
              _hover={{
                bg: "brand.blue",
                color: "brand.yellow",
                transition: "0.3s ease",
              }}
            />
          </HStack>
          <HStack
            w="100%"
            maxW="400px"
            color={linkcolor}
            margin="12px auto 0 auto"
          >
            <Text margin="0 auto">
              <Link to="/listings?q=books">
                <Search2Icon fontSize="12px" mt="-1" /> books
              </Link>{" "}
            </Text>
            <Text margin="0 auto">
              <Link to="/listings?q=couches">
                <Search2Icon fontSize="12px" mt="-1" /> couches
              </Link>
            </Text>{" "}
            <Text margin="0 auto">
              {" "}
              <Link to="/listings?q=mirrors">
                <Search2Icon fontSize="12px" mt="-1" /> mirrors
              </Link>
            </Text>
          </HStack>
        </Container>
      </Container>
      <br />

      <Box backgroundColor={greybg} p="50px">
        <Center>
          <Heading size="xl">Categories</Heading>
        </Center>
        <Wrap m="0 auto" width="900px" maxW="90%" fontSize="3xl" mt="32px">
          <Button p="30px" m="8px auto" fontSize="inherit">
            <Link to="/categories">All ♾️</Link>
          </Button>
          <Button p="30px" m="8px auto" fontSize="inherit">
            <Link to="/categories?c=school">School 📚</Link>
          </Button>
          <Button p="30px" m="8px auto" fontSize="inherit">
            <Link to="/categories?c=furniture">Furniture 🛌</Link>
          </Button>
          <Button p="30px" m="8px auto" fontSize="inherit">
            <Link to="/categories?c=housing">Housing 🏠</Link>
          </Button>
          <Button p="30px" m="8px auto" fontSize="inherit">
            <Link to="/categories?c=transportation">Transportation 🚲</Link>
          </Button>
          <Button p="30px" m="8px auto" fontSize="inherit">
            <Link to="/categories?c=electronics">Electronics 🎮</Link>
          </Button>
          <Button p="30px" m="8px auto" fontSize="inherit">
            <Link to="/categories?c=misc">Miscellaneous 📸</Link>
          </Button>
        </Wrap>
      </Box>

      <Stack p="10px" pb="60px">
        <br />
        <br />
        <Center>
          {" "}
          <Heading size="xl">Recent Listings</Heading>
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
    </div>
  );
};

export default Home;
