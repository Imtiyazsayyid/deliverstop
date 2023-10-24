import prisma from "@/prisma/client";
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
  Text,
} from "@radix-ui/themes";
import React from "react";
import SearchBar from "./SearchBar";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import TypeFilter from "./TypeFilter";
import { Restaurant } from "@prisma/client";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    dishName: string;
    type: string;
  };
}

const DishesPage = async ({ params, searchParams }: Props) => {
  let where: any = {
    restaurantId: parseInt(params.id),
    name: {
      contains: searchParams.dishName,
    },
  };

  if (searchParams.type) {
    where = {
      ...where,
      type: searchParams.type,
    };
  }

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  const dishes = await prisma.dish.findMany({
    where,
  });

  return (
    <Flex direction="column">
      <Flex justify={"center"} mt={"9"}>
        <Heading>{restaurant?.name}</Heading>
      </Flex>
      <SearchBar restaurantId={parseInt(params.id)} />
      <Flex justify={"end"} mb={"2"}>
        <TypeFilter restaurantId={parseInt(params.id)} />
      </Flex>
      <Grid columns={"1"} className="border p-5">
        <ScrollArea style={{ maxHeight: 500 }}>
          {dishes.map((dish) => (
            <Card size="3" mb={"2"}>
              <Flex gap="4" align="center" justify={"between"}>
                <Flex align="center" gap="4" className="w-2/3">
                  <Avatar size="5" fallback="?" color="indigo" src={dish.img} />
                  <Box>
                    <Flex gap={"3"} mb={"2"}>
                      <Text as="div" size="4" weight="bold">
                        {dish.name}
                      </Text>
                      <Badge
                        color={dish.type === "NON_VEG" ? "red" : "green"}
                        className="h-6"
                      >
                        {dish.type === "NON_VEG" ? "Non-Veg" : "Veg"}
                      </Badge>
                    </Flex>
                    <Text as="div" className="text-slate-500 text-xs">
                      {dish.description}
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text className="text-sm">${dish.price}</Text>
                </Box>
                <Button variant="soft" radius="full">
                  <PlusCircledIcon height={"16"} width={"16"} />
                </Button>
              </Flex>
            </Card>
          ))}
        </ScrollArea>
      </Grid>
    </Flex>
  );
};

export default DishesPage;
