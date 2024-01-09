import {
  useColorModeValue,
  Heading,
  Image,
  HStack,
  Container,
  Text,
  Button,
  Center,
  Stack,
  Box,
  Wrap,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import config from "../config";
import { SearchBar } from "../SearchBar";
import { ShowListings } from "./Listings";

const Home = () => {
  const mainbg = useColorModeValue("white", "gray.800");
  const greybg = useColorModeValue("gray.300", "gray.700");
  const linkcolor = useColorModeValue("blue.500", "blue.300");

  return (
    <div>
      <Container
        maxW="100%"
        textAlign="center"
        padding="25px"
        px="3"
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

        <Container maxW="100%" px="0">
          <SearchBar />
          <HStack
            w="100%"
            maxW="380px"
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
              <Link to="/listings?q=guitars">
                <Search2Icon fontSize="12px" mt="-1" /> guitars
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
            <Link to="/categories?c=education">Education 📚</Link>
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
            <Link to="/categories?c=miscellaneous">Miscellaneous 📸</Link>
          </Button>
        </Wrap>
      </Box>

      <Stack pb="60px">
        <br />
        <br />
        <Center>
          {" "}
          <Heading size="xl">Recent Listings</Heading>
        </Center>
        <br />
        <Flex wrap="wrap" justifyContent="center">
          {ShowListings("", 3)}
        </Flex>
        <Button colorScheme="gray" w="200px" m="20px auto" p="25px">
          <Link to="/listings">
            <a href="/">View All Listings</a>
          </Link>
        </Button>
      </Stack>
    </div>
  );
};

export default Home;
