import { Box, Container, Heading, Text, Separator } from "@chakra-ui/react";
// 
export default function WorkWithMeHero() {
  return (
<Box
  backgroundColor="secondary.300"
  borderBottom="7px solid"
  borderColor="brand.500"
>
  <Box
    maxW="6xl"
    mx={{ base: 4, md: 6, lg: 24 }}
    px={{ base: 6, md: 10, lg: 12 }}
    py={{ base: 8, md: 12, lg: 20 }}
  >
    <Text
      color="brand.500"
      fontSize="lg"
      fontWeight="bold"
      letterSpacing="wider"
      mb={5}
    >
      WORK WITH ME
    </Text>

    <Heading
      as="h1"
      maxW="900px"
      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
      lineHeight="0.98"
      fontWeight="900"
      color="gray.800"
      textTransform="uppercase"
    >
      Find the coaching
      <br />
      programme that fits
      <br />
      <Text as="span" color="brand.500">
        your lifestyle
        <br />
        and goals.
      </Text>
    </Heading>

    <Separator
      my={{ base: 8, md: 10 }}
      borderColor="brand.500"
      width={{ base: "30%", md: "18%" }}
      size="lg"
    />

    <Box maxW="750px">
      <Text
        color="gray.700"
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="1.7"
        mb={6}
        fontWeight="bold"
      >
        Whether you're a beginner, somebody that wants to take their
        training to the next level or a rider, there is a programme
        designed for you.
      </Text>

      <Text
        color="gray.700"
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="1.7"
        fontWeight="bold"
      >
        Every programme is built to help you get stronger, move better,
        and feel more confident — without overwhelm, confusion, or
        unrealistic expectations.
      </Text>
    </Box>
  </Box>
</Box>
  )
}
