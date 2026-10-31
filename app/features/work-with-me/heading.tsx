import { Box, Heading, Text, Separator, Grid } from "@chakra-ui/react";
import  Image  from "next/image";
import WorkWithMeImage from "../../assets/work-with-me.webp";
export default function WorkWithMeHero() {
  return (
<Box
  backgroundColor="secondary.300"
  borderBottom="7px solid"
  borderColor="brand.500"
  display="flex"
  justifyContent="center"
>
    <Box
      width="100%"
      maxW="1500px"
      mx="auto"
  >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 0.75fr",
            lg: "1.4fr 0.6fr",
          }}
          gap={{ base: 4, md: 6, lg: 12 }}
          py={{ base: 8, md: 12, lg: 16 }}
          px={{ base: 6, md: 10, lg: 20 }}
          alignItems="center"
        >
          <Box>
    <Text
      color="brand.500"
      fontSize="lg"
      fontWeight="bold"
      letterSpacing="wider"
      mb={5}
    >
      SERVICES
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
      option that fits
      <br />
      <Text as="span" color="brand.500">
        your lifestyle
        <br />
        and goals.
      </Text>
    </Heading>

    <Separator
      my={{ base: 8 }}
      borderColor="brand.500"
      width={{ base: "30%", md: "18%" }}
      size="lg"
    />

    <Box maxW="750px" width="90%">
      <Text
        color="gray.700"
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="1.7"
        fontWeight="bold"
      >
      Whether you want accountability and guidance through online coaching, a personalised training programme, or one off sessions, I'll help you train with confidence.  
      </Text>
    </Box>
  </Box>
      <Box
          position="relative"
          w="100%"
          minW={{ base: "100%", xl: "500px" }}
          h={{ base: "340px", md: '100%' }}
          overflow="hidden"
          borderRadius="lg"
          css={{
            "& img": {
              objectPosition: { base: "center 20%", md: "center", lg: "center 10%" },
            },
          }}
        >
          <Image
          src={WorkWithMeImage}
          fill
          alt="Image of Alex Lees, fitness coach leaning against exercise equipment"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>
  </Grid>
  </Box>
</Box>
  )
}
