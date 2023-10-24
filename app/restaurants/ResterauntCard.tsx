"use client";

import { Box, Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";
import React from "react";
import Rating from "../components/Rating";
import { Restaurant } from "@prisma/client";
import { useRouter } from "next/navigation";

const ResterauntCard = ({ id, name, address, rating, img }: Restaurant) => {
  const router = useRouter();
  return (
    <Card
      className="h-96 cursor-pointer"
      onClick={() => router.push("restaurants/" + id)}
    >
      <Inset side="top" className="h-1/2">
        <img src={img} className="block object-cover w-full h-full" />
      </Inset>
      <Heading
        size={"4"}
        className="h-1/6 flex items-center justify-center text-center"
      >
        {name}
      </Heading>
      <Text className="h-1/6 flex justify-center items-center text-center text-slate-400 text-xs px-12">
        {address}
      </Text>
      <Flex justify={"center"}>
        <Rating rating={rating} />
      </Flex>
    </Card>
  );
};

export default ResterauntCard;
