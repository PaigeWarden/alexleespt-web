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
      height="60px"
      backgroundColor="gray.700"
      borderBottom="5px solid"
      borderColor="brand.500"
      justifyContent="space-between"
      width="100%"
    >
      <Image
        src={Logo}
        alt="Logo"
        width={80}
        height={80}
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
  





