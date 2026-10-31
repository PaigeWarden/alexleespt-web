import { Box, Grid, Text } from "@chakra-ui/react";

export default function AboutMeApproach() {
    return (
        <Box bg="secondary.500">
        <Box
            maxW="1500px"
            display="flex"
            flexDirection="column"
            mx="auto"
            >

                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={{ base: 6, lg: 12 }}
                        px={{ base: 6, md: 10, lg: 16 }}
                        py={{ base: 8, md: 12, lg: 16 }}
                    >
                        <Text color="gray.900" fontSize={{ base: "xl", md: "xl", lg: "2xl" }} fontWeight="bold"  alignSelf="center">
                         I know that starting a fitness journey can feel overwhelming. Whether your goal is to lose weight, build strength, improve your health and fitness, or simply feel more confident in your body, my approach is simple, supportive, and tailored to you.
                        </Text>
                        <Box borderLeft="5px solid" borderColor="brand.500" pl={10}>
                        <Text color="brand.500" fontSize={{base: "xl", md: "3xl", lg: "4xl"}}  fontWeight="900"  style={{ WebkitTextStroke: "0.75px currentColor" }}
>
                            NO FAD DIETS, NO QUICK FIXES, JUST STRUCTURED TRAINING AND SUSTAINABLE HABITS THAT DELIVER LONG-TERM RESULTS.
                        </Text>
                        </Box>
                    </Grid>
            </Box>
            </Box>
            )
}