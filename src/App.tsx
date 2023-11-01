import * as React from "react";
import {
  ChakraProvider,
  theme,
  Heading,
  Image,
  Flex,
  HStack,
  Avatar,
  Container,
  Input,
  IconButton,
  Button,
  Text,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Center,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Search2Icon } from "@chakra-ui/icons";
// import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HStack
      as={"nav"}
      position="fixed"
      top="0"
      justify="space-between"
      backgroundColor="lightblue"
      width="100%"
      padding="20px 30px"
      height="90px"
      borderBottom="1px solid black"
    >
      <HStack>
        <Image src="logo-color.svg" w="50px" alt="CS+SG logo" mr="2" />
        <Heading size="md">UD Buy & Sell</Heading>
      </HStack>
      <Flex>
        <IconButton
          bg="white"
          border="1px solid black"
          borderRadius="50%"
          ml="-1px"
          h="50px"
          w="50px"
          aria-label="Search catalog"
          icon={<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />}
          _hover={{
            bg: "#EFEFEF",
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
            borderColor="grey"
            borderRadius="7px 0 0 7px"
            placeholder="What would you like to find?"
            _hover={{
              borderColor: "grey",
            }}
          />
          <IconButton
            borderRadius="0 7px 7px 0"
            bg="white"
            border="1px solid grey"
            ml="-1px"
            h="50px"
            w="50px"
            aria-label="Search catalog"
            icon={<Search2Icon />}
            _hover={{
              bg: "#EFEFEF",
            }}
          />
        </HStack>
      </Container>
    </Container>

    <Center>
      <Card maxW="sm" backgroundColor="blue.100">
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
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
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
  </ChakraProvider>
);
