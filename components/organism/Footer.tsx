"use client";
import { Box, HStack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "var(--chakra-colors-gray-900)",
        width: "100%",
      }}
    >
    <HStack
      as="footer"
      height="150px"
      maxW="1500px"
      mx="auto"
      justifyContent="space-between"
      width="100%"
      pl={{ base: 4, md: 8, lg: 20 }}
    >
      <Box display="flex" alignItems="flex-end" height="100%" pb={{ base: 4, md: 8 }}>
    <Text color="gray.100" >
        © 2026 Alex Lees. All rights reserved.
    </Text>
    </Box>
    </HStack>
    </Box>
  );
}
