
import { Box, Heading, Button, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import HeroBanner from "./features/landing/hero-banner";
import { PanelBanner } from "./features/landing/panel-banner";
import AboutPanel from "./features/landing/about-panel";

export default function Home() {
  return (
    <>
   <HeroBanner />
   <PanelBanner />
   <Box backgroundColor="gray.900" height="100px">
      <HStack gap={{base: 4, md: 24}} justifyContent="center" alignItems="center" height="100%" px={8}>
        <Text color="gray.100" fontSize={{base: "md", md: "xl"}} fontWeight="bold">
          Strength
        </Text>
        <Box w={{base: "3", md: "4"}} h={{base: "3", md: "4"}} borderRadius="full" backgroundColor="brand.500" />
        <Text color="gray.100" fontSize={{base: "md", md: "xl"}} fontWeight="bold">
          Confidence
        </Text>
        <Box w={{base: "3", md: "4"}} h={{base: "3", md: "4"}} borderRadius="full" backgroundColor="brand.500" />
        <Text color="gray.100" fontSize={{base: "md", md: "xl"}} fontWeight="bold">
          Balance
        </Text>

        </HStack>
   </Box>

   <AboutPanel />
   </>
  ); 
}
