import { Box, Separator, Text } from "@chakra-ui/react";
import AboutMeHeading from "../features/about-me/heading";
import AboutMeDescription from "../features/about-me/description";
import AboutMeApproach from "../features/about-me/approach";
import AboutMeGoalBanner from "../features/about-me/goal-banner";

export default function AboutMeRoute() {
    return (
        <Box minHeight="100vh" backgroundColor="secondary.300">

            <AboutMeHeading />
            <Separator
                borderColor="brand.500"
                width="100%" size="lg" mx="auto" />
            <AboutMeDescription />
            <Separator
                borderColor="brand.500"
                width="100%" size="lg" mx="auto" />
            <AboutMeApproach />
            <AboutMeGoalBanner />
            <Box maxW="1500px" mx="auto" py={{ base: 8, md: 12, lg: 16 }} px={{ base: 8, lg: 16 }} textAlign="center">
                <Text letterSpacing="tight" color="gray.900" style={{ WebkitTextStroke: "1px currentColor" }}

                    fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }} fontWeight="bold" textAlign="center">
                    READY TO GET STARTED?
                </Text>
                <Text color="brand.500" letterSpacing="tight" fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }} fontWeight="bold" textAlign="center"
                    style={{ WebkitTextStroke: "1px currentColor" }}
                >
                    LET'S WORK TOGETHER
                </Text>
            </Box>
        </Box>


    )
}