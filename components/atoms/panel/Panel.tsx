
import { Box, Text, VStack, Heading, Icon, Link } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface PanelProps {
  title: string;
  description: string;
  link: {
    icon: { url: string; alt: string };
    text: string;
    href: string;
  };
}

export default function Panel({ title, description, link }: PanelProps) {
  return (
    <Box
      bg="secondary.100"
      borderRadius="md"
      p={4}
      borderColor="brand.500"
      minHeight="200px"
    maxWidth="260px"
      filter="drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25))"
      mt={4}
    >
      <VStack gap={2} align="stretch" h="100%">
        <Box display="flex" justifyContent="center">
        <Image src={link.icon.url} alt={link.icon.alt} width={50} height={50} />
        </Box>
        {/* Fixed-height wrapper — locks the space above the link, no matter the content */}
        <Box height="110px" overflow="hidden" width="100%">
          <Heading as="h3" alignSelf="start" minH="3.6" size="lg" color="gray.700" lineHeight="1.2">
            {title}
          </Heading>
          <Text color="gray.700" fontSize="md" lineHeight="1.2" mt={2} >
            {description}
          </Text>
        </Box>

        <Link
        mt="auto"
          alignSelf="start"
          color="brand.500"
          fontWeight="bold"
          href={link.href}
          textDecoration="underline"
          textUnderlineOffset="3px"
          textDecorationThickness="2px"
        >
          {link.text}
          <Icon ml={1}>
            <FaArrowRight color="brand.500" />
          </Icon>
        </Link>
      </VStack>
    </Box>
  );
}