import prisma from "@/prisma/client";
import { Flex, Heading } from "@radix-ui/themes";
import React from "react";

export const CartPage = async () => {
  const cart = prisma.cartItem.findMany({
    where: {
      userId: 1,
    },
  });

  return (
    <Flex>
      <Heading>Ready To Order?</Heading>
      <Text></Text>
    </Flex>
  );
};
