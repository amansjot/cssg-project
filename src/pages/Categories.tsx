import {
  useColorModeValue,
  Heading,
  Center,
  Stack,
} from "@chakra-ui/react";

const Categories = () => {
  const mainbg = useColorModeValue("white", "gray.800");

  return (
    <div>
      <Stack backgroundColor={mainbg} py="60px">
        <Center>
          {" "}
          <Heading size="xl">Categories</Heading>
        </Center>
        <br />
        <Center>
          
        </Center>
      </Stack>
    </div>
  );
};

export default Categories;
