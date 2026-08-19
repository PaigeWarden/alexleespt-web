"use client";
import { Box, Heading, HStack, Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function QuestionBanner() {
    const router = useRouter();
    return (
        <Box bg="gray.900" width="100%" display="flex" justifyContent="center" p={8} flexDirection="column" borderBottom="5px solid" borderColor="brand.500">
                <Heading as="h2" size={{ base: "2xl", md: "3xl" }} color="gray.100" textAlign="center">
                    WANT A BODY YOU'RE PROUD OF?
                </Heading>
                <Text color="gray.100" fontSize="md" textAlign="center" mt={4}>
                    Take action today
                </Text>
            <HStack display={{base: "none", md: "flex"}} justifyContent="center" mt={6} gap={4}>
                <Button  bgColor="brand.500" color="gray.100" size="lg" _hover={{ bgColor: "brand.600" }} width="25%" borderRadius="lg" onClick={() => router.push("/work-with-me")}>
                FIND OUT MORE
            </Button>
                <Button border="1px solid" size="lg" borderColor="brand.500" borderRadius="lg" width="20%" onClick={() => router.push("/contact")}>
                CONTACT ME
                </Button>
            </HStack>
            <VStack display={{base: "flex", md: "none"}} justifyContent="center" mt={6} mx={6} gap={4}>
                <Button  bgColor="brand.500" color="gray.100" size="lg" _hover={{ bgColor: "brand.600" }} width="100%" borderRadius="lg" onClick={() => router.push("/work-with-me")}>
                FIND OUT MORE
            </Button>
                <Button border="1px solid" size="lg" borderColor="brand.500" borderRadius="lg"  width="100%" onClick={() => router.push("/contact")}>
                CONTACT ME
                </Button>
            </VStack>
        </Box>
    )
}
