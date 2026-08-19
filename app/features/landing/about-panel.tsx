// import { Box, Heading, HStack, VStack, Text, Button } from "@chakra-ui/react";
// import AboutMeImage from "../../assets/image.png";

// export default function AboutPanel() {
//   return (
//     <Box backgroundColor="secondary.300" p={8}>
//       <HStack alignItems="start" gap={4}>
//         <Box
//           width="40%"
//           height="280px"
//           backgroundImage={`url(${AboutMeImage.src})`}
//           backgroundSize="cover"
//           borderRadius="md"
//         />
//         <VStack width="60%" gap={2} alignItems="start" p={4}>
//             <Heading as="h2" color="brand.500" fontSize="xl">
//               ABOUT ALEX
//             </Heading>
//             <Text color="gray.900" fontSize="3xl" fontWeight="bold">
//               COACH . MENTOR . MOTIVATOR
//             </Text>
//             <Text color="gray.900" fontSize="md" width="70%" fontWeight="bold">
//               I am passionate about helping people build strength, confidence
//               and healthy habits that last. My coaching is built on consistency,
//               discipline and a plan that works for you.
//             </Text>

//             <Button variant="solid" backgroundColor="brand.500" color="gray.100" fontWeight="bold" _hover={{ backgroundColor: "brand.600" }} width="50%" mt={6}>
//             LEARN MORE ABOUT ME
//             </Button>
//         </VStack>
//       </HStack>
//     </Box>
//   );
// }
import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import AboutMeImage from "../../assets/image.png";

export default function AboutPanel() {
  return (
    <Box bg="secondary.300"  py={10} px={{ base: 5, md: 8 }} >
      <HStack
        maxW="1100px"
        mx="auto"
        align={{base: "center", md: "flex-start"}}
        gap={{ base: 8, md: 10 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "42%" }}
          h={{ base: "260px", md: "300px" }}
          backgroundImage={`url(${AboutMeImage.src})`}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="lg"
          flexShrink={0}
        />

        <VStack
          w={{ base: "100%", md: "58%" }}
          align={{ base: "center", md: "flex-start" }}
          gap={4}
        >
          <Heading
            as="h2"
            color="brand.500"
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="0.08em"
            mt={3}
          >
            ABOUT ALEX
          </Heading>

          <Text
            color="gray.900"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            lineHeight="1.2"
            textAlign={{ base: "center", md: "left" }} 
          >
            COACH . MENTOR . MOTIVATOR
          </Text>

          <Text
            color="gray.900"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.7"
            maxW="500px"
            width={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }} 
          >
            I am passionate about helping people build strength,
            confidence and healthy habits that last. My coaching is
            built on consistency, discipline and a plan that works
            for you.
          </Text>

          <Button
            mt={2}
            px={8}
            bg="brand.500"
            color="white"
            fontWeight="bold"
            _hover={{ bg: "brand.600" }}
          >
            LEARN MORE ABOUT ME
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
}