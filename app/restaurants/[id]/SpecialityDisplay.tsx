"use client";
import { Dish, Restaurant } from "@prisma/client";
import { Card, Flex, Inset, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  dishes: Dish[];
  restaurant: Restaurant;
}

const SpecialityDisplay = ({ dishes, restaurant }: Props) => {
  const router = useRouter();
  return (
    <Flex gap={"2"} className=" overflow-hidden overflow-x-scroll p-4" mb={"1"}>
      {dishes.map((dish) => (
        <Card
          className="h-56 w-48 cursor-pointer"
          onClick={() =>
            router.push(
              `/restaurants/${restaurant?.id}/dishes?dishName=${dish.name}`
            )
          }
        >
          <Inset side="top" className="h-2/3 mb-2 w-48">
            <img src={dish.img} className="h-full cover w-full" />
          </Inset>
          <Text
            className="w-full text-sm h-1/6 px-5"
            as={"div"}
            align={"center"}
            mb={"4"}
          >
            {dish.name}
          </Text>
          <Text
            className="w-full text-xs text-slate-500 h-1/6"
            as={"div"}
            align={"center"}
          >
            ${dish.price}
          </Text>
        </Card>
      ))}
    </Flex>
  );
};

export default SpecialityDisplay;
