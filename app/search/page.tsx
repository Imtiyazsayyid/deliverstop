"use client";

import { Grid, ScrollArea } from "@radix-ui/themes";
import ResterauntCard from "./ResterauntCard";
import SearchBar from "./SearchBar";

const restaurants = [
  {
    id: 1,
    name: "Bella Italia Ristorante",
    rating: 5,
    img: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1600",
    address: "123 Main Street, Cityville, CA 12345, United States",
  },
  {
    id: 2,
    name: "The Steakhouse",
    rating: 3,
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600",
    address: "456 Oak Avenue, Townsville, NY 67890, United States",
  },
  {
    id: 3,
    name: "Sushi Delight",
    rating: 5,
    img: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1600",
    address: "789 Elm Lane, Metropolis, TX 54321, United States",
  },
  {
    id: 4,
    name: "La Pizzeria",
    rating: 4,
    img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600",
    address: "101 Pine Street, Smalltown, IL 11111, United States",
  },
];

export default function Home() {
  return (
    <main>
      <SearchBar />
      <ScrollArea
        type="always"
        scrollbars="vertical"
        style={{ height: "36rem" }}
        className="p-5 shadow-md rounded-lg"
      >
        <Grid columns={"3"} gap={"3"} className="rounded-lg">
          {restaurants.map((restaurant) => (
            <ResterauntCard
              id={restaurant.id}
              name={restaurant.name}
              rating={restaurant.rating}
              address={restaurant.address}
              img={restaurant.img}
            />
          ))}
        </Grid>
      </ScrollArea>
    </main>
  );
}
