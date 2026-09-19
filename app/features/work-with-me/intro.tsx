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
  "Flexible Pricing Bundles",
];

const bundleIncludedItems = [
  "Personalised programme",
  "Adjustments & progressive overload",
  "Weekly check-ins",
  "24/7 support",
  "Nutritional guidance",
  "Macro goals",
  "Structure, guidance & accountability",
];

export default function CoachingIntro() {
  return (
    <Box bg="gray.900" color="gray.100" py={{ base: 8, md: 16 }} px={{ base: 4, md: 16
     }}>
      <Container maxW="5xl" >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
          <Box
            bg="whiteAlpha.100"
            p={{ base: 6, md: 10 }}
            borderRadius="lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Heading as="h2" size="2xl" mb={4}>
              Online Coaching
            </Heading>
            <Text fontSize="sm" mb={2}  alignSelf="flex-start">
              12 week programme followed by a monthly subscription if you want
              to continue
            </Text>
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
              {onlineIncludedItems.map((item, index) => (
                <ListItem display="flex" alignItems="center" key={index}>
                  <Box color="brand.500">
                    <FaCheckCircle size={18} />
                  </Box>
                  <Text ml={2}>{item}</Text>
                </ListItem>
              ))}
            </List.Root>
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
             my={4}
             textAlign="center"
             fontWeight="bold"
           >
             Bundle clients also receive:
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
  );
}
