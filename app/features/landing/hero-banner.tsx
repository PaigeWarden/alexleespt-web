import { Box, Text, Separator, Button } from "@chakra-ui/react";
import HeroImage from "../../assets/woman-holding-weights-near-barbells1.png";

export default function HeroBanner() {
  return (
    <>
      {/* Mobile + iPad: stacked */}
      <Box display={{ base: "flex", lg: "none" }} flexDirection="column">
        <Box
          backgroundImage={`url(${HeroImage.src})`}
          backgroundSize="cover"
          backgroundPosition="top"
          height={{ base: "280px", md: "340px" }}
          borderBottom="5px solid"
          borderColor="brand.500"
        />
        <Box backgroundColor="gray.900" px={6} py={8}>
          <Text
            color="secondary.500"
            fontSize="xs"
            letterSpacing="wider"
            mb={2}
          >
            TRAIN WITH ALEX
          </Text>
          <Text
            color="brand.500"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="1.05"
          >
            BUILD A BODY
          </Text>
          <Text
            color="gray.100"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="1.05"
          >
            YOU'RE PROUD OF
          </Text>
          <Separator my={4} borderColor="brand.500" width="30%" size="lg" />
          <Text color="secondary.500" fontSize="sm" lineHeight="1.6">
            Personalised coaching that fits your lifestyle and supports your goals.
          </Text>
          <Button
            variant="solid"
            backgroundColor="brand.500"
            color="gray.100"
            mt={6}
            width="100%"
            size="lg"
            _hover={{ backgroundColor: "brand.700" }}
          >
            CONTACT ME
          </Button>
          <Button 
            variant="ghost" 
            color="gray.100" mt={4}  
            _hover={{ backgroundColor: "rgba(215, 198, 202, 0.1)" }} 
            textDecoration="underline" 
            textDecorationColor="brand.500" 
            textUnderlineOffset="5px" 
            textDecorationThickness="1px"
            p={0}>
            Learn more about coaching
          </Button>
        </Box>
      </Box>

      {/* Desktop: overlay */}
      <Box
        display={{ base: "none", lg: "flex" }}
        backgroundImage={`url(${HeroImage.src})`}
        backgroundSize="cover"
        backgroundPosition="top"
        maxHeight="620px"
        width="100%"
        height={{ lg: "550px", xl: "620px" }}
        alignItems="center"
        borderBottom="7px solid"
        borderColor="brand.500"
        overflow="hidden"
      >
        <Box
          width={{ lg: "50%", xl: "40%" }}
          backgroundColor="rgba(10, 10, 10, 0.85)"
          borderRadius={10}
          mx={8}
          py={8}
          px={6}
        >
          <Text color="secondary.500" fontSize="xs" letterSpacing="wider" mb={3}>
            TRAIN WITH ALEX
          </Text>
          <Text
            color="brand.500"
            fontSize={{ lg: "5xl", xl: "6xl" }}
            fontWeight="bold"
            lineHeight="1.05"
          >
            BUILD A BODY
          </Text>
          <Text
            color="gray.100"
            fontSize={{ lg: "5xl", xl: "6xl" }}
            fontWeight="bold"
            lineHeight="1.05"
          >
            YOU'RE PROUD OF
          </Text>
          <Separator my={4} borderColor="brand.500" width="40%" size="lg" />
          <Text color="secondary.500" fontSize="md" lineHeight="1.6" mb={6}>
            Personalised coaching that fits your lifestyle and supports your goals.
          </Text>
          <Button
            variant="solid"
            backgroundColor="brand.500"
            color="gray.100"
            width={{ lg: "80%", xl: "60%" }}
            size="lg"
            _hover={{ backgroundColor: "brand.700" }}
          >
            CONTACT ME
          </Button>
        </Box>
      </Box>
    </>
  );
}