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
} from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';

const Listings = () => {

  const mainbg = useColorModeValue("white", "gray.800");
  const listingbg = useColorModeValue("blue.50", "blue.800");
  const listingtxt = useColorModeValue("black", "white");
  const listingborder = useColorModeValue("blue.600", "blue.900");

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div>
      <Stack backgroundColor={mainbg} py="60px">
        <Center>
          {" "}
          <Heading size="xl">{query ? `Listings for "${query}"` : "All Listings"}</Heading>
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
            m="10px"
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
                <Button variant="solid" borderColor="brand.blue" backgroundColor="brand.blue" color="white">
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

export default Listings;
