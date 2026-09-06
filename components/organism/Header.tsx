"use client";
import { HStack, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../app/assets/logo-light.png";
import MenuLinks from "../molecule/MenuLink";
import MobileDrawer from "../molecule/MobileDrawer";


export const Header = () => {
  return (
    <HStack
      as="header"
      px={{ base: 4, md: 8, lg: 20 }}
      height="80px"
      backgroundColor="gray.900"
      borderBottom="5px solid"
      borderColor="brand.500"
      justifyContent="space-between"
      width="100%"
    >
      <Image
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        />

      <Box display={{ base: "none", md: "block" }}>
        <MenuLinks />
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <MobileDrawer />
      </Box>
    </HStack>
  );
}
