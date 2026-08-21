import { Box, Heading, Separator, Text, VStack } from "@chakra-ui/react";

export default function WorkWithMeHeading() {
    return (
        <Box backgroundColor="secondary.500" height="200px" display="flex"
        p={{base: 4, md: 8}}>
            <VStack alignItems="start" width="100%">
            <Heading as="h1" color="brand.500" fontSize="lg">
                WORK WITH ME
            </Heading>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="lg" fontWeight="bold" color="gray.700" textAlign="center">
                FIND THE COACHING PROGRAMME THAT FITS YOUR LIFESTYLE AND GOALS.
            </Text>
            </Box>  
            </VStack>
        </Box>
    )
}