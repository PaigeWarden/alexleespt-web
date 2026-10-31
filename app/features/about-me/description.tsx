import { Box, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import RidingImage from "../../assets/alex-riding.webp";

export default function AboutMeDescription() {
  return (
    <>
    <Box bg="secondary.300">
      <Box
        maxW="1500px"
        display="flex"
        flexDirection="column"
        mx="auto"

      >
        {/* MAIN CONTENT */}
        <Box 
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 8, lg: 16 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 6, lg: 12 }}
        >
          <Box
            position="relative"
            w="100%"
            h={{
              base: "300px",
              sm: "400px",
              md: "450px",
              lg: "400px",
            }}
            overflow="hidden"
            borderRadius="lg"
            css={{
              "& img": {
                objectPosition: {
                  base: "center 10%",
                  md: "center 25%",
                  lg: "center 10%",
                },
              },
            }}
          >
            <Image
              src={RidingImage}
              alt="Alex riding a horse"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" >
            {/* LARGE HEADLINE */}
            <Text
              fontSize={{ base: "xl", md: "2xl",lg: "3xl", xl: "4xl" }}
              lineHeight={{ base: "1.15", md: "0.95" }}
              fontWeight="900"
              color="gray.800"
              mb={{ base: 4, md: 6, lg: 10 }}
              style={{ WebkitTextStroke: "0.75px currentColor" }}

            >
           MY OWN JOURNEY INTO FITNESS BEGAN THROUGH MY CAREER AS A PROFESSIONAL DRESSAGE RIDER, WHERE TRAINING WITH PURPOSE, DISCIPLINE, AND CONSISTENCY WAS PART OF EVERYDAY LIFE.
            </Text>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              lineHeight={{ base: "1.5", md: "1.4" }}
              fontWeight="900"
              color="gray.700"

              >
                Those lessons now shape the way I coach my clients.
              </Text>

          </Box>

        </Grid>
        </Box>
      </Box>
    </Box>

    </>
  );
}