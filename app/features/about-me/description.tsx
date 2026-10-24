// import { Box, Grid, Text } from "@chakra-ui/react";

// export default function AboutMeDescription() {
//   return (
//     <Box
//       bg="secondary.300"
//     mx={{ base: 4, md: 6, lg: 20 }}
//     py={{ base: 10, md: 12, lg: 16 }}
//     >
//       {/* LABEL */}
//       <Box mb={{ base: 8, md: 10 }}>
//         <Text
//           color="brand.500"
//           fontSize="lg"
//           fontWeight="700"
//         >
//           MY APPROACH
//         </Text>

//         <Box
//           mt={2}
//           w="55px"
//           h="1px"
//           bg="brand.500"
//         />
//       </Box>

//       {/* MAIN CONTENT */}
//       <Grid
//         templateColumns={{
//           base: "1fr",
//           lg: "1.1fr 0.9fr",
//         }}
//         gap={{ base: 8 }}
//       >
//         {/* LARGE HEADLINE */}
//         <Text
//           fontSize={{
//             base: "3xl",
//             sm: "4xl",
//             md: "5xl",
//           }}
//           lineHeight="0.95"
//           fontWeight="900"
//           letterSpacing="-0.025em"
//           color="gray.800"
//           maxW="850px"
//         >
//           WITH A BACKGROUND AS A PROFESSIONAL DRESSAGE RIDER, I TRAINED WITH
//           PURPOSE.
//         </Text>

//         {/* RIGHT COPY */}
//         <Box
//           borderLeft={{ base: "none", lg: "1px solid" }}
//           borderColor="brand.500"
//           pl={{ base: 0, lg: 8 }}
//         >
//           <Text
//             fontSize={{ base: "md", md: "lg" }}
//             lineHeight="1.5"
//             color="gray.800"
//           >
//             Now I’m here to help you find yours. I know what it feels like to
//             want to be stronger, fitter, and more capable, and I understand
//             how hard it can be to stay consistent.
//           </Text>

//           <Text
//             mt={6}
//             fontSize={{ base: "md", md: "lg" }}
//             lineHeight="1.5"
//             color="gray.800"
//           >
//             My approach is simple, structured, and supportive, giving you the
//             tools to build long-term progress.
//           </Text>
//         </Box>
//       </Grid>

//       {/* BOTTOM STATEMENT */}
//       <Grid
//         templateColumns={{
//           base: "1fr",
//           md: "0.25fr 1fr",
//         }}
//         gap={{ base: 5, md: 8 }}
//         alignItems="end"
//         mt={{ base: 10, md: 14 }}
//       >
//         <Box
//           display={{ base: "none", md: "block" }}
//           h="1px"
//           bg="brand.500"
//           w="100%"
//           mb={2}
//         />

//         <Text
//           fontSize={{
//             base: "2xl",
//             sm: "3xl",
//             md: "4xl"
//           }}
//           lineHeight="1"
//           fontWeight="900"
//           letterSpacing="-0.02em"
//           color="brand.500"
//           maxW="1050px"
//         > 
//           If you want to feel stronger, move better, and train with confidence, you’re in the right place.
//         </Text>
//       </Grid>
//     </Box>
//   );
// }
import { Box, Grid, Text } from "@chakra-ui/react";

export default function AboutMeDescription() {
  return (
    <Box
      bg="secondary.300"
      mx={{ base: 4, md: 6, lg: 20 }}
      py={{ base: 8, md: 12, lg: 16 }}
    >
      {/* LABEL */}
      <Box mb={{ base: 6, md: 10 }}>
        <Text color="brand.500" fontSize={{ base: "md", md: "lg" }} fontWeight="700">
          MY APPROACH
        </Text>

        <Box mt={2} w="55px" h="1px" bg="brand.500" />
      </Box>

      {/* MAIN CONTENT */}
      <Grid
        templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }}
        gap={{ base: 6, lg: 8 }}
      >
        {/* LARGE HEADLINE */}
        <Text
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          lineHeight={{ base: "1.15", md: "0.95" }}
          fontWeight="900"
          letterSpacing={{ base: "-0.01em", md: "-0.025em" }}
          color="gray.800"
          maxW="850px"
        >
          WITH A BACKGROUND AS A PROFESSIONAL DRESSAGE RIDER, I TRAINED WITH
          PURPOSE.
        </Text>

        {/* RIGHT COPY */}
        <Box
          borderLeft={{ base: "none", lg: "1px solid" }}
          borderColor="brand.500"
          pl={{ base: 0, lg: 8 }}
        >
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" color="gray.800">
            Now I’m here to help you find yours. I know what it feels like to
            want to be stronger, fitter, and more capable, and I understand
            how hard it can be to stay consistent.
          </Text>

          <Text mt={4} fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" color="gray.800">
            My approach is simple, structured, and supportive, giving you the
            tools to build long-term progress.
          </Text>
        </Box>
      </Grid>

      {/* BOTTOM STATEMENT */}
      <Grid
        templateColumns={{ base: "1fr", md: "0.25fr 1fr" }}
        gap={{ base: 4, md: 8 }}
        alignItems="end"
        mt={{ base: 8, md: 14 }}
      >
        <Box
          display={{ base: "none", md: "block" }}
          h="1px"
          bg="brand.500"
          w="100%"
          mb={2}
        />

        <Text
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={{ base: "1.25", md: "1" }}
          fontWeight="900"
          letterSpacing="-0.02em"
          color="brand.500"
          maxW="1050px"
        >
          If you want to feel stronger, move better, and train with confidence, you’re in the right place.
        </Text>
      </Grid>
    </Box>
  );
}