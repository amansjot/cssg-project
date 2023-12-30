import {
  useColorModeValue,
  Heading,
  Center,
  Stack,
} from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';

const Categories = () => {
  const mainbg = useColorModeValue("white", "gray.800");

  const [searchParams] = useSearchParams();
  let category: string | null = searchParams.get('c');
  if (category) category = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div>
      <Stack backgroundColor={mainbg} py="60px">
        <Center>
          {" "}
          <Heading size="xl">{category ? `Category: ${category}` : "All Categories"}</Heading>
        </Center>
        <br />
        <Center>
          
        </Center>
      </Stack>
    </div>
  );
};

export default Categories;
