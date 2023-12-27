import {
    useColorModeValue,
    Heading,
    Center,
    Stack,
  } from "@chakra-ui/react";
  
  const Sell = () => {
    const mainbg = useColorModeValue("white", "gray.800");
  
    return (
      <div>
        <Stack backgroundColor={mainbg} py="60px">
          <Center>
            {" "}
            <Heading size="xl">Sell an Item</Heading>
          </Center>
          <br />
          <Center>
            
          </Center>
        </Stack>
      </div>
    );
  };
  
  export default Sell;
  