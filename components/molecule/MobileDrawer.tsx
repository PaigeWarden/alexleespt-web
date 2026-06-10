import { CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuLinks from "./MenuLink";

const MobileDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger color="gray.100" mr={4} display="flex" alignItems="center">
        <GiHamburgerMenu size={20}
        />
      </Drawer.Trigger>
      <Portal>
        <Drawer.Positioner>
          <Drawer.Content backgroundColor="gray.100">
            <Drawer.Header
              backgroundColor="gray.900"
              color="gray.100"
              borderBottom="5px solid"
              borderColor="brand.500"
              mb={4}
              minH="60px"
            />
            <Drawer.Body>
              <MenuLinks isMobile={true} />
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton
                size="sm"
                color="gray.100"
              />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileDrawer;
