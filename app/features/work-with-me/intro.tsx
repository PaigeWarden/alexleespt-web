import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  SimpleGrid,
  Separator,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const onlineIncludedItems = [
  "Personalised training programme",
  "Weekly check-ins",
  "24/7 messaging support",
  "Progress tracking and adjustments",
  "Clear structure and guidance",
];

const personalTrainingIncludedItems = [
  "Personalised training programme",
  "One to one training sessions",
  "Inbetween session support",
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
            justifyContent="center"
          >
            <Heading as="h2" size="2xl" mb={4}>
              Online Coaching
            </Heading>
            <Text fontSize="sm" mb={2} fontStyle="italic" alignSelf="flex-start">
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
              1-1 Personal Training
            </Heading>
            <Text fontSize="sm" mb={2} fontStyle="italic" alignSelf="flex-start">
              Need to be a member of the gym group to access this service.
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
              {personalTrainingIncludedItems.map((item, index) => (
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
