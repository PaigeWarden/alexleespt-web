
import { Box, Heading, Button } from "@chakra-ui/react";
import Image from "next/image";
import HeroBanner from "./features/landing/hero-banner";
import { PanelBanner } from "./features/landing/panel-banner";

export default function Home() {
  return (
    <>
   <HeroBanner />
   <PanelBanner />
   </>
  ); 
}
