import { Card, Heading, Inset, Text } from "@radix-ui/themes";
import React from "react";
import Rating from "../components/Rating";

interface Props {
  id: number;
  name: string;
  address: string;
  rating: number;
  img: string;
}

const ResterauntCard = ({ id, name, address, rating, img }: Props) => {
  return (
    <Card className="h-96">
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
      <Rating rating={rating} />
    </Card>
  );
};

export default ResterauntCard;
