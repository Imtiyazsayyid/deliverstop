import Rating from "@/app/components/Rating";
import prisma from "@/prisma/client";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import SpecialityDisplay from "./SpecialityDisplay";

interface Props {
  params: {
    id: string;
  };
}

const ResterauntDetailPage = async ({ params }: Props) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  const dishes = await prisma.dish.findMany({
    where: {
      restaurantId: parseInt(params.id),
    },
    take: 4,
  });
  return (
    <>
      <Flex className="h-screen p-3" direction={"column"} gap={"4"} mt={"9"}>
        <Box className="w-full col-span-2 h-1/3">
          <img
            src={restaurant?.img}
            className="object-cover h-full w-full rounded-lg"
          />
        </Box>
        <Flex className="h-2/3" gap={"4"}>
          <Box className="w-1/2 h-2/3 border p-10 rounded-lg">
            <Heading mb={"5"}>Our Speciality</Heading>
            <SpecialityDisplay dishes={dishes} restaurant={restaurant!} />
            <Flex justify={"end"}>
              <Link href={`/restaurants/${restaurant?.id}/dishes`}>
                <Button className="w-48">See All</Button>
              </Link>
            </Flex>
          </Box>
          <Box className="w-1/2 h-2/3 border p-10 rounded-lg">
            <Heading>{restaurant?.name}</Heading>
            <Text className="text-sm text-slate-500">
              {restaurant?.address}
            </Text>
            <Rating rating={restaurant?.rating || 0} />
            <Text>{restaurant?.description}</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ResterauntDetailPage;
