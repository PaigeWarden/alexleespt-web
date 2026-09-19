import { Box, Separator, Text} from "@chakra-ui/react";
import AboutMeHeading from "../features/about-me/heading";
import AboutMeDescription from "../features/about-me/description";

export default function AboutMeRoute() {
    return (
        <Box minHeight="100vh" backgroundColor="secondary.300">
         
         <AboutMeHeading />
            <Separator 
borderColor="brand.500" 
width="90%" size="lg" mx="auto"/>
<AboutMeDescription />
        </Box>
        
    )
}