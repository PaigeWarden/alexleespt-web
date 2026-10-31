import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Separator,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const onlineIncludedItems = [
  "Personalised programme",
  "Adjustments & progressive overload",
  "Weekly check-ins",
  "24/7 support",
  "Nutritional guidance",
  "Macro goals",
  "Structure, guidance & accountability",
];

const personalTrainingIncludedItems = [
  "1-1 Personal Training",
  "Hybrid Coaching Programme",
];

const bundleIncludedItems = [
  "One in-person coaching session per week",
  "Personalised training programme",
  "Ongoing adjustments & progressive overload",
  "Weekly check-ins and progress reviews",
  "24/7 support via message",
  "Nutritional guidance",
  "Personalised calorie and macro goals",
  "Structure, accountability, and expert guidance"
];

export default function CoachingIntro() {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "var(--chakra-colors-gray-900)",
      }}
      display="flex"
      justifyContent="center"
    >
      <Box maxW="1500px" color="gray.100" py={{ base: 8, md: 16 }} px={{
        base: 4, md: 16
      }}>
        <Container >
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12}>
            <Box
              bg="whiteAlpha.100"
              p={{ base: 6, md: 10 }}
              borderRadius="lg"

            >
              <Heading as="h2" size="2xl" mb={4} alignSelf="center" textAlign="center">
                Online Coaching
              </Heading>
              <Text fontSize="sm" mb={2} alignSelf="flex-start">
               Monthly programming package:
              </Text>
              <Separator
                my={4}
                borderColor="brand.500"
                width="30%"
                size="sm"
                alignSelf="flex-start"
              />
              <Text
                alignSelf="flex-start"
                fontSize="md"
                mb={8}
                fontWeight="bold"
              >
                Whats included:
              </Text>
              <List.Root gap={3} alignSelf="flex-start">
                {onlineIncludedItems.map((item, index) => (
                  <ListItem display="flex" alignItems="center" key={index}>
                    <Box color="brand.500">
                      <FaCheckCircle size={18} />
                    </Box>
                    <Text ml={2}>{item}</Text>
                  </ListItem>
                ))}
              </List.Root>
              <Text width="90%"  color="gray.100" alignSelf="flex-start"
                fontSize="md"
                mt={8}
                fontWeight="bold"
                borderLeft="2px solid"
                borderColor="brand.500"
                pl={4}>
                Perfect for: Anyone who wants personalised coaching, clear structure, and consistent support, wherever they train. 
              </Text>
            </Box>

            <Box
              bg="whiteAlpha.100"
              p={{ base: 6, md: 10 }}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Heading as="h2" size="2xl" mb={4}>
                In-Person Coaching
              </Heading>
              <Box alignSelf="flex-start" mb={2}>
                <Text fontSize="sm">Location: The Gym Group, Turner Rise (Colchester)</Text>
                <Text fontSize="sm" fontStyle="italic">Private gym sessions available on request</Text>
              </Box>

              <Separator
                my={2}
                borderColor="brand.500"
                width="30%"
                size="sm"
                alignSelf="flex-start"
              />
              <Text
                alignSelf="flex-start"
                fontSize="md"
                mb={4}
                textAlign="center"
                fontWeight="bold"
              >
                Whats included:
              </Text>
              <List.Root gap={3} alignSelf="flex-start">
                {personalTrainingIncludedItems.map((item, index) => (
                  <ListItem display="flex" alignItems="center" key={index}>
                    <Box color="brand.500">
                      <FaCheckCircle size={18} />
                    </Box>
                    <Text ml={2}>{item}</Text>
                  </ListItem>
                ))}
              </List.Root>
              <Text
                alignSelf="flex-start"
                fontSize="md"
                mt={4}
                textAlign="center"
                fontWeight="bold"
              >
               Hybrid Coaching Programme:
              </Text>
              <Text width="90%" my={4} color="gray.100" alignSelf="flex-start" borderLeft="2px solid" borderColor="brand.500" pl={4}>
                Designed for those who want the accountability of in-person coaching, alongside the structure, guidance, and support needed to stay on track between sessions. 
              </Text>
                       <Text
                alignSelf="flex-start"
                fontSize="md"
                mb={4}
                textAlign="center"
                fontWeight="bold"
              >
               What's included:
              </Text>
              <List.Root gap={3} alignSelf="flex-start">
                {bundleIncludedItems.map((item, index) => (
                  <ListItem display="flex" alignItems="center" key={index}>
                    <Box color="brand.500">
                      <FaCheckCircle size={18} />
                    </Box>
                    <Text ml={2}>{item}</Text>
                  </ListItem>
                ))}
              </List.Root>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
