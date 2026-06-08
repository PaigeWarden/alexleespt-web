import { Box, Text, Separator, Button } from "@chakra-ui/react";
import HeroImage from "../../assets/woman-holding-weights-near-barbells1.png";

export default function HeroBanner() {
  return (
    <>
      <Box
        backgroundImage={`url(${HeroImage.src})`}
        backgroundSize={"cover"}
        maxHeight="620px"
        width="100%"
        height={{ base: "300px", md: "550px" }}
        backgroundPosition="top"
        display="flex"
        alignItems="center"
        borderBottom="7px solid"
        borderColor="brand.500"
        overflow="hidden"
      >
        <Box
          width="50%"
          height="80%"
          backgroundColor="rgba(42, 42, 45, 0.7)"
          borderRadius={10}
          ml={8}
        >
          <Text color="gray.100" m={6}>
            TRAIN WITH ALEX
          </Text>
          <Box display="flex" flexDirection="column" mx={6}>
            <Text color="brand.500" fontSize={{ base: "2xl", md: "6xl" }} fontWeight="bold" lineHeight="1.2">
              STRONG BODY
            </Text>
            <Text color="gray.100" fontSize={{ base: "2xl", md: "6xl" }} fontWeight="bold" lineHeight="1.2">
              STRONG MIND
            </Text>
            <Separator my={4} borderColor="brand.500" size="lg" width="50%" />
          </Box>
          <Box width="50%">
            <Text color="gray.100" ml={6} fontSize={{ base: "sm", md: "lg" }} lineHeight="1">
              Personalised one to one training and
nutrition, coaching you to become the
strongest version of yourself
            </Text>
            <Button variant="solid" backgroundColor="brand.500" color="gray.100" mt={4} ml={6} width="90%">
              CONTACT ME
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
