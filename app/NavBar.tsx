import prisma from "@/prisma/client";
import { Avatar, Button, Container, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { PiHamburgerBold } from "react-icons/pi";
import { BiCart } from "react-icons/bi";

const NavBar = async () => {
  const NavLinks = [
    { label: "restaurants", value: "Restaurants" },
    { label: "offers", value: "Offers" },
    { label: "help", value: "Help" },
  ];

  const isLoggedIn = true;

  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return (
    <nav>
      <Flex py={"5"} className="shadow-md">
        <Container>
          <Flex align={"center"} justify={"between"}>
            <Flex align={"center"} gap={"4"}>
              <PiHamburgerBold className="text-4xl" color="var(--tomato-a10)" />
              <Heading size={"5"} color="tomato">
                DeliveryStop
              </Heading>
            </Flex>

            <Flex gap={"5"} align={"center"}>
              {NavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={"/" + link.label}
                  className="hover:text-[var(--tomato-a10)] transition-all"
                >
                  {link.value}
                </Link>
              ))}
              {isLoggedIn ? (
                <Flex align={"center"} gap={"4"}>
                  <Avatar fallback="?" src={user?.img || ""} />
                  <Link href={`/cart/${1}`}>
                    <BiCart className="text-4xl text-[var(--tomato-a11)] shadow-md p-2 rounded-full cursor-pointer" />
                  </Link>
                </Flex>
              ) : (
                <Link href={"/login"}>
                  <Button className="cursor-pointer">Login</Button>
                </Link>
              )}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </nav>
  );
};

export default NavBar;
