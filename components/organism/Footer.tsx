"use client";
import { HStack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <HStack
      as="footer"
      px={{ base: 4, md: 8, lg: 20 }}
      height="60px"
      backgroundColor="gray.900"
      borderBottom="5px solid"
      borderColor="brand.500"
      justifyContent="space-between"
      width="100%"
    >
    <Text>
        © 2026 Alex Lees. All rights reserved.
    </Text>
    </HStack>
  );
}
