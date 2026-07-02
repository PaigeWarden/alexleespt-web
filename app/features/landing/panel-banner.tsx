import { Box, Heading, Separator, HStack } from "@chakra-ui/react"
import Panel from "../../../components/atoms/panel/Panel";

const panelData = [
    {
        title: "1 TO 1 PERSONAL TRAINING",
        description: "Fully customised training, mindset coaching and ongoing support.",
        link: {
            icon: {
                url: "/ptIcon.png",
                alt: "Personal Training Icon"
            },
            text: "LEARN MORE",
            href: "/"
        }
    },
    {
        title: "ONLINE COACH",
        description: "Flexible online programs with personalised plans, check-ins and accountability.",
        link: {
            icon: {
                url: "/onlineIcon.png",
                alt: "Online Coaching Icon"
            },
            text: "LEARN MORE",
            href: "/"
        }
    },
    {
        title: "GROUP TRAINING",
        description: "Train in a motivating group environment and push your limits together.",
        link: {
            icon: {
                url: "/groupIcon.png",
                alt: "Group Training Icon"
            },
            text: "LEARN MORE",
            href: "/"
        }
    },
    {
        title: "RIDER STRENGTH & CONDITIONING",
        description: "Personalized training to help you reach your fitness and riding goals.",
        link: {
            icon: {
                url: "/riderIcon.png",
                alt: "Rider Strength & Conditioning Icon"
            },
            text: "LEARN MORE",
            href: "/"
        }
    }

]

export const PanelBanner = () => {
    return ( 
 <Box
   backgroundColor="secondary.300"
   borderBottom="5px solid"
   pb={6}
 >
    <Heading as ="h2" size="3xl" color="gray.700" textAlign="center" pt={12}>
        COACHING THAT FITS YOUR GOALS
    </Heading>
    <Separator my={3} borderColor="brand.500" width="20%" size="lg" mx="auto" fontWeight="bold"/>
    
<Box
  display="grid"
  gridTemplateColumns="repeat(4, 1fr)"
  gap={4}
  mx="auto"
  px={4}
  ml={4}
>
  {panelData.map((panel, index) => (
    <Panel key={index} title={panel.title} description={panel.description} link={panel.link} />
  ))}
</Box>
</Box>
        );
}