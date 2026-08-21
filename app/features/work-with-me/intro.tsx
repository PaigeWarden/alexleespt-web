import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function CoachingIntro() {
  return (
    <Box bg="secondary.300" py={{ base: 14, md: 24 }}>
      <Container maxW="5xl">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          color="gray.700"
          maxW="800px"
          lineHeight="1.1"
        >
          COACHING BUILT AROUND
          <br />
          <Box as="span" color="brand.500">
            REAL LIFE.
          </Box>
        </Heading>

        <Text
          mt={8}
          maxW="760px"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
          color="gray.700"
        >
          Every programme is built to help you get stronger, move better, and
          feel more confident — without overwhelm, confusion, or unrealistic
          expectations.
        </Text>
      </Container>
    </Box>
  );
}