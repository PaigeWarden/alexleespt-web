import { Box, Grid, Heading, Separator, Text } from "@chakra-ui/react";
import Image from "next/image";
import AboutMeImage from "../../assets/bent-over-row.webp";

export default function AboutMeHeading() {
  return (
    <Box bg="secondary.300">
      <Box maxW="1500px" mx="auto">
      <Grid
        templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }}
        gap={{ base: 8, md: 10 }}
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 6, md: 10, lg: 16 }}
        alignItems="center"
      >
        {/* TEXT */}
        <Box>
          <Heading
            color="brand.500"
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="wider"
            as="h1"
            mb={4}
          >
            ABOUT ME
          </Heading>

          <Text
            fontSize={{
              base: "3xl",
              sm: "4xl",
              md: "5xl",
              lg: "6xl",
              xl: "7xl",
            }}
            lineHeight="0.98"
            fontWeight="900"
            color="gray.800"
            style={{ WebkitTextStroke: "0.75px currentColor" }}
          >
            HI, I'M ALEX
          </Text>
          <Separator
            bg="brand.500"
            h={2}
            maxW={{ base: "100%", lg: "80%" }}
            display={{base: "none", lg: "block"}}
            my={6}
          />

          <Text
            fontSize={{
              base: "2xl",
              lg: "4xl"
            }}
            lineHeight="0.98"
            fontWeight="900"
            color="brand.500"
            maxW={{ base: "100%"}}
            mt={4}
            style={{ WebkitTextStroke: "0.75px currentColor" }}
          >
           A PERSONAL TRAINER PASSIONATE ABOUT HELPING PEOPLE BUILD STRENGTH, CONFIDENCE, AND HEALTHY HABITS THAT LAST.
          </Text>
        </Box>

        {/* IMAGE */}
        <Box
          position="relative"
          w="100%"
          h={{
            base: "240px",
            sm: "300px",
            md: "400px",
            lg: "360px",
          }}
          overflow="hidden"
          borderRadius="lg"
        >
          <Image
            src={AboutMeImage}
            alt="Alex, fitness coach"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
            priority
          />
        </Box>
      </Grid>
      </Box>
    </Box>
  );
}