import prisma from "@/prisma/client";
import { Grid, Heading, ScrollArea, Text } from "@radix-ui/themes";
import ResterauntCard from "./ResterauntCard";
import SearchBar from "./SearchBar";

interface Props {
  searchParams: {
    restaurantName: string;
  };
}

export default async function ResterauntsPage({ searchParams }: Props) {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      name: {
        contains: searchParams.restaurantName,
      },
    },
  });

  return (
    <main>
      <Heading align={"center"} mt={"9"}>
        Order From Your Favourite Places.
      </Heading>
      <SearchBar />
      <ScrollArea
        type="always"
        scrollbars="vertical"
        style={{ height: "36rem" }}
        className="p-5 shadow-md rounded-lg"
      >
        <Grid columns={"3"} gap={"3"} className="rounded-lg">
          {restaurants &&
            restaurants.length > 0 &&
            restaurants.map((restaurant) => (
              <ResterauntCard
                id={restaurant.id}
                name={restaurant.name}
                rating={restaurant.rating}
                address={restaurant.address}
                img={restaurant.img}
                description={restaurant.description}
                averageCost={restaurant.averageCost}
              />
            ))}
          {restaurants?.length === 0 && (
            <Text className="col-span-3 text-center text-sm text-slate-400">
              No Results Found.
            </Text>
          )}
        </Grid>
      </ScrollArea>
    </main>
  );
}
