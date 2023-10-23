"use client";
import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { PiHamburgerBold } from "react-icons/pi";

const NavBar = () => {
  const NavLinks = [
    { label: "search", value: "Search" },
    { label: "offers", value: "Offers" },
    { label: "help", value: "Help" },
  ];

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
                  href={link.label}
                  className="hover:text-[var(--tomato-a10)] transition-all"
                >
                  {link.value}
                </Link>
              ))}
              <Link href={"/login"}>
                <Button className="cursor-pointer">Login</Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </nav>
  );
};

export default NavBar;
