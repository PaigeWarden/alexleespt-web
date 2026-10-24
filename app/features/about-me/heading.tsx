import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import AboutMeImage from "../../assets/image.png";

export default function AboutMeHeading() {
  return (
    <Box bg="secondary.300">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 0.75fr",
          lg: "1.2fr 0.8fr",
        }}
        gap={{ base: 8, md: 10, lg: 14 }}
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 6, md: 10, lg: 20 }}
        alignItems="center"
      >
        {/* TEXT */}
        <Box>
          <Heading
            color="brand.500"
            fontSize="lg"
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
            }}
            lineHeight="0.98"
            fontWeight="900"
            color="gray.800"
          >
            I'M ALEX,
          </Text>

          <Text
            fontSize={{
              base: "3xl",
              sm: "4xl",
              md: "5xl",
              lg: "6xl",
            }}
            lineHeight="0.98"
            fontWeight="900"
            color="brand.500"
          >
            A FITNESS COACH HELPING YOU BUILD A BODY YOU'RE PROUD OF.
          </Text>
        </Box>

        {/* IMAGE */}
        <Box
          position="relative"
          w="100%"
          h={{
            base: "240px",
            sm: "280px",
            md: "300px",
            lg: "360px",
          }}
          overflow="hidden"
          borderRadius="lg"
        >
          <Image
            src={AboutMeImage}
            alt="Alex, fitness coach"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
            priority
          />
        </Box>
      </Grid>
    </Box>
  );
}