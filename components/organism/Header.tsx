"use client";
import { HStack, Box } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../app/assets/logo-light.png";
import MenuLinks from "../molecule/MenuLink";
import MobileDrawer from "../molecule/MobileDrawer";
import {useRouter} from "next/navigation";


export const Header = () => {
  const router = useRouter();
  return (
    <Box
      as="header"
      backgroundColor="gray.900"
      borderBottom="5px solid"
      borderColor="brand.500"
      width="100%"
    >
      <HStack
        px={{ base: 4, md: 8}}
        height="80px"
        justifyContent="space-between"
        width="100%"
        maxWidth="1500px"
        mx="auto"
      >
        <Box as="a" cursor="pointer" onClick={() => router.push("/")}>
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={120}
        />
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <MenuLinks />
        </Box>

        <Box display={{ base: "block", md: "none" }}>
          <MobileDrawer />
        </Box>
      </HStack>
    </Box>
  );
}
