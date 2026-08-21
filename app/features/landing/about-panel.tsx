import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import AboutMeImage from "../../assets/image.png";

export default function AboutPanel() {
  return (
    <Box bg="secondary.300" py={10} px={{ base: 5, md: 8 }}>
      <HStack
        maxW="1100px"
        mx="auto"
        align="flex-start"
        gap={{ base: 8, md: 10 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "42%" }}
          h={{ base: "260px", md: "300px" }}
          backgroundImage={`url(${AboutMeImage.src})`}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="lg"
          flexShrink={0}
        />

        <VStack
          w={{ base: "100%", md: "58%" }}
          align="flex-start"
          gap={4}
        >
          <Heading
            as="h2"
            color="brand.500"
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="0.08em"
            mt={3}
          >
            ABOUT ALEX
          </Heading>

          <Text
            color="gray.900"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            COACH . MENTOR . MOTIVATOR
          </Text>

          <Text
            color="gray.900"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.7"
            maxW="500px"
            width={{ base: "100%", md: "80%" }}
          >
            I am passionate about helping people build strength,
            confidence and healthy habits that last. My coaching is
            built on consistency, discipline and a plan that works
            for you.
          </Text>

          <Button
            mt={2}
            px={8}
            bg="brand.500"
            color="white"
            fontWeight="bold"
            _hover={{ bg: "brand.600" }}
          >
            LEARN MORE ABOUT ME
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
}