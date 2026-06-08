import { HStack, VStack, Link } from "@chakra-ui/react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "WORK WITH ME", href: "/work-with-me" },
  { name: "CONTACT", href: "/contact" },
]

const MenuLinks = ({ isMobile = false }) => {
  const LinkComponent = isMobile ? VStack : HStack;

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          fontWeight="medium"
          color={isMobile ? "gray.700" : "gray.100"}
          _hover={{
            color: "brand.200",
            textDecoration: "underline",
            textDecorationColor: "brand.500",
            textUnderlineOffset: "4px",
            textDecorationThickness: "2px",
          }}
          transition="color 0.2s ease"
        >
          {item.name}
        </Link>
      ))}

    </LinkComponent>
  );
};

export default MenuLinks;
