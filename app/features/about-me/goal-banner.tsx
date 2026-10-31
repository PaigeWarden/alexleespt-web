import { Box, Text } from "@chakra-ui/react";

export default function AboutMeGoalBanner() {
    return(
            <Box bg="brand.500" w="100%">
                  <Box
        maxW="1500px"
        display="flex"
        flexDirection="column"
        mx="auto"

      >
        <Box
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 8, lg: 16 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        >
        <Text width="70%" color="gray.100" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" textAlign="center">
YOUR HEALTH IS THE BEST INVESTMENT YOU'LL EVER MAKE        </Text>
        </Box>
      </Box>
            </Box>
    )
}