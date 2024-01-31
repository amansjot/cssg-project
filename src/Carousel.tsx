import * as React from "react";
import { useState } from "react";
import { Box, Button, Image, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const images: string[] = [
  "https://i.imgur.com/HPT4tdP.png",
  "https://i.imgur.com/FR22IdD.png",
  "https://i.imgur.com/jENX5R1.png",
  "https://i.imgur.com/NZGjDGb.png",
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev + images.length - 1) % images.length);
  };

  return (
    <Box m="0 auto" w="400px">
      <Flex alignItems="center" width="400px" justifyContent="center">
        <Button
          cursor="pointer"
          borderRadius="0"
          onClick={prevSlide}
          mr="-50px"
          height="300px"
          opacity="0.2"
          zIndex="2"
          _hover={{
              opacity: 0.6
          }}
        >
          <ChevronLeftIcon
            boxSize="20px"
            bg="grey.300"
            borderRadius="10px"
            opacity="1"
          />
        </Button>
        <Flex overflow="hidden" w="full">
          {images.map((src, index) => (
            <Box
              key={index}
              boxSize="full"
              flex="none"
              display={index === currentSlide ? "block" : "none"}
            >
              <Image
                src={src}
                height="300px"
                m="0 auto"
                alt={`Slide ${index}`}
                fit="cover"
              />
            </Box>
          ))}
        </Flex>
        <Button
          cursor="pointer"
          borderRadius="0"
          onClick={nextSlide}
          ml="-50px"
          height="300px"
          opacity="0.2"
          zIndex="2"
          _hover={{
              opacity: 0.6
          }}
        >
          <ChevronRightIcon
            boxSize="20px"
            bg="grey.300"
            borderRadius="10px"
            opacity="1"
          />
        </Button>
      </Flex>
    </Box>
  );
};

export default Carousel;
