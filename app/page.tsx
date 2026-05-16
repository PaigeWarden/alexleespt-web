import { Box, Heading, Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Box m={4}>
      <Heading>
          Hi
      </Heading>
      <Button backgroundColor='pink.500'>
        Hello World
      </Button>
    </Box>    
  )
}
