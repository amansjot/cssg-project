import {
    useColorModeValue,
    Heading,
    Center,
    Stack,
  } from "@chakra-ui/react";
  
  const Cart = () => {
    const mainbg = useColorModeValue("white", "gray.800");
  
    return (
      <div>
        <Stack backgroundColor={mainbg} py="60px">
          <Center>
            {" "}
            <Heading size="xl">My Cart</Heading>
          </Center>
          <br />
          <Center>
            
          </Center>
        </Stack>
      </div>
    );
  };
  
  export default Cart;
  