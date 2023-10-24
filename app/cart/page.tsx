import prisma from "@/prisma/client";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  ScrollArea,
  Strong,
  Text,
} from "@radix-ui/themes";
import React from "react";

const CartPage = async () => {
  const cart = await prisma.cartItem.findMany({
    where: {
      userId: 1,
    },
    include: {
      dish: true,
    },
  });

  let totalItems = 0;
  let cartTotal = 0;

  for (let item of cart) {
    totalItems += item.item_count;
  }

  for (let item of cart) {
    cartTotal += item.dish.price * item.item_count;
  }

  return (
    <Flex direction={"column"} align={"center"} p={"9"}>
      <Heading mb="3">Ready To Order?</Heading>
      <Text className="text-sm text-slate-600" mb="7">
        Guaranteed Delivery Under 20 Minutes.
      </Text>
      <Grid columns={"1"} className="border p-5">
        <ScrollArea style={{ maxHeight: 500 }}>
          {cart?.map((cartItem) => (
            <Card size="3" mb={"2"} key={cartItem.id}>
              <Flex gap="4" align="center" justify={"between"}>
                <Flex align="center" gap="4" className="w-2/3">
                  <Avatar
                    size="5"
                    fallback="?"
                    color="indigo"
                    src={cartItem.dish.img}
                  />
                  <Box>
                    <Flex gap={"3"} mb={"2"}>
                      <Text as="div" size="4" weight="bold">
                        {cartItem.dish.name}
                      </Text>
                      <Badge
                        color={
                          cartItem.dish.type === "NON_VEG" ? "red" : "green"
                        }
                        className="h-6"
                      >
                        {cartItem.dish.type === "NON_VEG" ? "Non-Veg" : "Veg"}
                      </Badge>
                    </Flex>
                    <Text as="div" className="text-slate-500 text-xs">
                      {cartItem.dish.description}
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text className="text-sm">{cartItem.item_count}</Text>
                </Box>
                <Box>
                  <Text className="text-sm">${cartItem.dish.price}</Text>
                </Box>
                <Button variant="soft" radius="full">
                  <MinusCircledIcon height={"16"} width={"16"} />
                </Button>
              </Flex>
            </Card>
          ))}
        </ScrollArea>
      </Grid>
      <Flex justify={"between"} width={"100%"} mt={"6"}>
        <Text>
          Total Items: <Strong>{totalItems}</Strong>
        </Text>
        <Text>
          Cart Total: <Strong>${cartTotal}</Strong>
        </Text>
      </Flex>
    </Flex>
  );
};

export default CartPage;
